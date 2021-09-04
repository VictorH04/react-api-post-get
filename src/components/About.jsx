import { useState } from "react";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import "../SASS/base/_About.scss";

const About = ({
  aboutTitle,
  aboutText,
  aboutPortfolio,
  aboutGithub,
  aboutHomeBtn,
}) => {
    const [isAbout, setIsAbout] = useState(true);

  const transition = useTransition(isAbout, {
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 100, opacity: 0 },
    delay: 350
  });

  return (
      <>

    {transition((style, item) =>
        item ? (

        <animated.div style={style} className="about">
        <h1 className="about-title">{aboutTitle}</h1>
        <p className="about-text">{aboutText}</p>
        <a
            href={aboutPortfolio}
            className="about-link"
            rel="noreferrer"
            target="_blank"
        >
            {aboutPortfolio}
        </a>
        <a
            href={aboutGithub}
            className="about-link"
            rel="noreferrer"
            target="_blank"
        >
            {aboutGithub}
        </a>
        <Link className="about-btn" to="/">
            {aboutHomeBtn}
        </Link>
        </animated.div>

        ) : ('')
        
    )}
    
    </>
  );
};

export default About;
