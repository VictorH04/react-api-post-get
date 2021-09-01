import { useState } from "react";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import "../SASS/base/_Nav.scss";

const Nav = ({ about }) => {
  const [isOpen, setIsOpen] = useState(false);

  const transition = useTransition(isOpen, {
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 100, opacity: 0 },
  });

  console.log(isOpen);

  const handleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <nav className="Nav">
        <div
          onClick={handleOpen}
          className={isOpen === true ? "Nav_icon active" : "Nav_icon"}
        >
          <span className="Nav_line1"></span>
          <span className="Nav_line2"></span>
          <span className="Nav_line3"></span>
        </div>
      </nav>

      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="Nav-content">
            <ul className="Nav-content--ul">
              <Link
                className="Nav-content--ul-home"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                <h1 className="Nav-content--ul-home_home--title">Home</h1>
              </Link>
              <Link
                className="Nav-content--ul-about"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                <h1 className="Nav-content--ul-about_about--title">{about}</h1>
              </Link>
            </ul>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default Nav;
