import "../SASS/base/_PostPage.scss";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ cards, handleDelete }) => {
  const { id } = useParams();
  const card = cards.find((card) => card.id.toString() === id);

  return (
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
        {!card && <></>}
      </div>
    </div>
  );
};

export default PostPage;
