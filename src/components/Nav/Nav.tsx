import "./Nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";

function Nav() {
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

          <Link to="/About">O mnie</Link>

          <Link to="Skills">Portfolio</Link>

          <Link to="Contact">Kontakt</Link>
        </div>
        <div className="socials">
          <div className="git">
            <FontAwesomeIcon icon={faGithub} fontSize="2rem" />
          </div>
          <div className="fb">
            <FontAwesomeIcon icon={faFacebookF} fontSize="2rem" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
