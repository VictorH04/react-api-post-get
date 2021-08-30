import { Link } from "react-router-dom";
import "../SASS/base/_Nav.scss";

const Nav = ({title, about}) => {
    return (
        <nav className="Nav">
            <h2 className="Nav-name">{title}</h2>
            <Link className="Nav-about" to="/about">
                <h2 className="Nav-about">{about}</h2>
            </Link>
        </nav>
    )
}

export default Nav
