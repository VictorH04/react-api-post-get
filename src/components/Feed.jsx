import Card from "./Card";
import "../SASS/base/_Card.scss";

const Feed = ({ cards }) => {

  return (
    <div className="cardContainer">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Feed;
