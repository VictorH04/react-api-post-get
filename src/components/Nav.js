import { BackgroundColor } from "jest-matcher-utils/node_modules/chalk";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../SASS/base/_Nav.scss";

const Nav = ({title, about}) => {
    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen)

    const handleOpen = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }


    return (
        <nav className="Nav">
            <div
                onClick={handleOpen}
                className={isOpen === true ? "Nav_icon active" : "Nav_icon"}>
                <span className="Nav_line1"></span>
                <span className="Nav_line2"></span>
                <span className="Nav_line3"></span>
            </div>
            
            {
                isOpen === true ? (
                    <div className="Nav-content" style={{opacity: isOpen ? 1 : 0}}>
                        <Link className="Nav-content--about" to="/about">
                            <h2 className="Nav-content--about">{about}</h2>
                        </Link>
                    </div>) : <> </>
            }
        </nav>
    )
}

export default Nav
