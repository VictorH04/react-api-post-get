import "../SASS/base/_Card.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTransition, animated } from "react-spring";


const Card = ({ card }) => {

  const transition = useTransition(card, {
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 100, opacity: 0 },
  });
  
  return (
    <>
    {transition((style, item) =>
      item ? (  
      <animated.div style={style} className="cardContainer-inside">
        <Link className="cardContainer--link" to={`posts/${card.id}`}>
          <h2 className="cardContainer--cardTitle">{card.title}</h2>
          <p className="cardContainer--cardDate">{card.dateTime}</p>
          <p className="cardContainer--cardText">
            {card.text.length <= 55 ? card.text : `${card.text.slice(0, 55)}...`}
          </p>
        </Link>
      </animated.div>
      ) : ('')

    )}
    </>
  );
};

export default Card;
