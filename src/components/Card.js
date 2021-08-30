import { Link } from "react-router-dom";

const Card = ({ card }) => {
    
    return (
        <div>
            <Link to={`posts/${card.id}`}>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
            </Link>
        </div>
    )
}

export default Card
