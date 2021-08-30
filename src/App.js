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
        console.log(posts);
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

  const handleSubmit = async () => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, dateTime, body: postBody };

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

  return (
    <>
      <Nav title="Victor's cool app!" about="About" />
      <div className="Home">
        <Switch>
          <Route exact path="/">
            <Form
              handleSubmit={handleSubmit}
              setPostBody={setPostBody}
              setPostTitle={setPostTitle}
              postBody={postBody}
              postTitle={postTitle}
            />
            <Feed cards={posts} />
          </Route>
          <Route path="/post/:id">
            <PostPage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
