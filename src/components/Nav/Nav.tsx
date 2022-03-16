import "./Nav.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

interface INav {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Nav({ setLoading }: INav) {
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    window.scrollY = 0;
  }, [location.pathname]);

  return (
    <>
      <nav>
        <div className="logo">
          <strong>J</strong>
          <p>Jakub</p>
          <p>Frontend Developer</p>
        </div>
        <div className="content">
          <Link to="/">Start</Link>

          <Link to="/about">O mnie</Link>

          <Link to="portfolio">Portfolio</Link>

          <Link to="contact">Kontakt</Link>
        </div>
        <div className="socials">
          <div
            onClick={() =>
              window.open("https://github.com/jakubGora", "_blank")
            }
            className="git"
          >
            <FontAwesomeIcon icon={faGithub} fontSize="2rem" />
          </div>
          <div
            onClick={() =>
              window.open("https://www.facebook.com/jakub.gora.395/", "_blank")
            }
            className="fb"
          >
            <FontAwesomeIcon icon={faFacebookF} fontSize="2rem" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
