import "../SASS/base/_PostPage.scss";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ cards, handleDelete, toHomeBtn }) => {
  const { id } = useParams();
  const card = cards.find((card) => card.id.toString() === id);

  return (
    <>
    <div className="PostPage">
      <div className="PostPage-post">
        {card && (
          <>
            <h1 className="PostPage-post--title">{card.title}</h1>
            <h3 className="PostPage-post--time">{card.dateTime}</h3>
            <p className="PostPage-post--text">{card.text}</p>
            <button
              type="button"
              className="PostPage-post--btn"
              onClick={() => handleDelete(card.id)}
            >
              Delete card
            </button>
          </>
        )}
        {!card && 
        <>
          <h1 className="noCardText2">No card here!</h1>
          <br />
          <Link className="noCardLink" to="/">
            Please return to homepage
          </Link>
        </>}
      </div>

    </div>
    <button type="button" onClick={() => toHomeBtn()} className="toHomeBtn">&larr; Homepage</button>
    </>
  );
};

export default PostPage;
