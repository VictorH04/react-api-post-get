import "../SASS/base/_Card.scss";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
    
    return (
            <div className="cardContainer-inside">
                <Link className="cardContainer--link" to={`posts/${card.id}`}>
                    <h2 className="cardContainer--cardTitle">{card.title}</h2>
                    <p className="cardContainer--cardDate">{card.dateTime}</p>
                    <p className="cardContainer--cardText">{card.text.length <= 35 ? card.text : `${card.text.slice(0, 35)}...`}</p>
                </Link>
            </div>
    )
}

export default Card
