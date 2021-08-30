import Card from "./Card";

const Feed = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};

export default Feed;
