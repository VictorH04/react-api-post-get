import "./SASS/base/_Home.scss";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { format } from "date-fns";
import Nav from "./components/Nav";
import Feed from "./components/Feed";
import Form from "./components/Form";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Footer from "./components/Footer";
import api from "./api/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");

  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");

        setPosts(response.data);

        console.log(response);
      } catch (err) {
        if (err.response) {
          // Not in 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err.message);
        }
      }
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, dateTime, text: postBody };

    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];

      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const cardsList = posts.filter((card) => card.id !== id);
      setPosts(cardsList);
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }

    console.log(id);
  };

  const toHomeBtn = () => {
    history.push("/");
  }

  return (
    <>
      <Nav title="Victor's cool app!" about="About" />
      <div className="Home">
        <Switch>
          <Route exact path="/">
            {posts.length >= 1 ? (
              <>
                <Feed cards={posts} />
              </>
            ) : (
              <p className="noCardText">Please submit a card!</p>
            )}
            <Form
              handleSubmit={handleSubmit}
              setPostBody={setPostBody}
              setPostTitle={setPostTitle}
              postBody={postBody}
              postTitle={postTitle}
            />
          </Route>
          <Route path="/posts/:id">
            <PostPage toHomeBtn={toHomeBtn} cards={posts} handleDelete={handleDelete} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <Footer cardsLength={posts} />
    </>
  );
}

export default App;
