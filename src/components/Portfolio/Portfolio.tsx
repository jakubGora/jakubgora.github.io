import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Portfolio.css";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

interface IPortfolio {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Portfolio({ setLoading }: IPortfolio) {
  const canie = require("../../img/canien.png");
  const memo = require("../../img/memory.png");
  const play = require("../../img/playapp.png");
  const unsplash = require("../../img/unsplashapp.png");
  const tie = require("../../img/tieapp.png");

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="Portfolio">
      <div className="title">
        <p>Moje Portfolio</p>
      </div>

      <div className="gallery">
        <div className="project">
          <div className="descr">
            {" "}
            <div>
              {" "}
              <h2>Unsplash app</h2>
              <p>
                Aplikacja przeznaczona do <br /> wyszukiwania zdjęć o określonej
                <br /> tematyce. Wykorzystuje API <br /> z{" "}
                <a href="https://unsplash.com/">https://unsplash.com/</a>.
              </p>
            </div>
            <div className="tech">
              <img src="https://img.icons8.com/ultraviolet/80/000000/react--v2.png" />
              <img src="https://img.icons8.com/color/96/000000/typescript.png" />
              <img src="https://img.icons8.com/color/96/000000/sass.png" />
              <img src="https://img.icons8.com/color/96/000000/api.png" />
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://jakubgora.github.io/un-splash-app/",
                  "_blank"
                )
              }
              className="demo"
            >
              <p>
                {" "}
                <br />
                Live demo
                <br /> here{" "}
              </p>

              <FontAwesomeIcon
                icon={faPaperclip}
                fontSize="3rem"
              ></FontAwesomeIcon>
            </div>
          </div>

          <img className="object" src={unsplash}></img>
        </div>
        <div style={{ width: "50%" }} className="project">
          <div className="descr">
            {" "}
            <div>
              {" "}
              <h2>Tie app</h2>
              <p>
                Aplikacja przeznaczona do <br /> zarządzania domowym <br />{" "}
                budżetem.
                <br />
                Połączona z autentykacją
                <br /> i bazą danych firebase.
              </p>
            </div>{" "}
            <div className="tech">
              <img src="https://img.icons8.com/ultraviolet/80/000000/react--v2.png" />
              <img src="https://img.icons8.com/color/96/000000/javascript--v2.png" />
              <img src="https://img.icons8.com/color/96/000000/sass.png" />
              <img src="https://img.icons8.com/color/96/000000/google-firebase-console.png" />
            </div>
            <div
              onClick={() => window.open("https://jakubgora.pl/tie/", "_blank")}
              className="demo"
            >
              <p>
                {" "}
                <br />
                Live demo
                <br /> here{" "}
              </p>

              <FontAwesomeIcon
                icon={faPaperclip}
                fontSize="3rem"
              ></FontAwesomeIcon>
            </div>
          </div>
          <img className="object" src={tie}></img>
        </div>
        <div style={{ width: "50%" }} className="project">
          <div className="descr">
            {" "}
            <div>
              {" "}
              <h2>Play Store Clone</h2>
              <p>
                Klon sklepu play firmy google <br /> wykorzystujący zewnętrzne
                API <br /> dostarczone przez <br />
                <a href="https://rapidapi.com/">https://rapidapi.com/</a>.
              </p>
            </div>{" "}
            <div className="tech">
              <img src="https://img.icons8.com/ultraviolet/80/000000/react--v2.png" />
              <img src="https://img.icons8.com/color/96/000000/javascript--v2.png" />
              <img src="https://img.icons8.com/color/96/000000/sass.png" />
              <img src="https://img.icons8.com/color/96/000000/api.png" />
            </div>
            <div
              onClick={() =>
                window.open("https://jakubgora.pl/play/", "_blank")
              }
              className="demo"
            >
              <p>
                {" "}
                <br />
                Live demo
                <br /> here{" "}
              </p>

              <FontAwesomeIcon
                icon={faPaperclip}
                fontSize="3rem"
              ></FontAwesomeIcon>
            </div>
          </div>
          <img className="object" src={play}></img>
        </div>
        <div className="project">
          <div className="descr">
            {" "}
            <div>
              {" "}
              <h2>Memo Game</h2>
              <p>
                Prosta gra typu memory <br /> polegająca na odsłanianiu <br />{" "}
                par kart.
                <br /> Napisana w React <br /> z wykorzystaniem TypeScript.
              </p>
            </div>{" "}
            <img src="https://img.icons8.com/ultraviolet/80/000000/react--v2.png" />
            <img src="https://img.icons8.com/color/96/000000/typescript.png" />
            <img src="https://img.icons8.com/color/96/000000/sass.png" />
            <div
              onClick={() =>
                window.open(
                  "https://jakubgora.github.io/memory-game/",
                  "_blank"
                )
              }
              className="demo"
            >
              <p>
                {" "}
                <br />
                Live demo
                <br /> here{" "}
              </p>

              <FontAwesomeIcon
                icon={faPaperclip}
                fontSize="3rem"
              ></FontAwesomeIcon>
            </div>
          </div>

          <img
            style={{ objectPosition: "center" }}
            className="object"
            src={memo}
          ></img>
        </div>
        <div className="project">
          <div className="descr">
            {" "}
            <div>
              {" "}
              <h2>Strona Canien Boss Club</h2>
              <p>
                Strona typu wizytówka <br /> prezentująca firmę zajmującą się
                <br /> szkoleniem psów.
              </p>
            </div>{" "}
            <img src="https://img.icons8.com/ultraviolet/80/000000/react--v2.png" />
            <img src="https://img.icons8.com/color/96/000000/javascript--v2.png" />
            <img src="https://img.icons8.com/color/96/000000/sass.png" />
            <img src="https://img.icons8.com/color/96/000000/google-firebase-console.png" />
            <div
              onClick={() => window.open("http://caninebossclub.pl/", "_blank")}
              className="demo"
            >
              <p>
                {" "}
                <br />
                Live demo
                <br /> here{" "}
              </p>

              <FontAwesomeIcon
                icon={faPaperclip}
                fontSize="3rem"
              ></FontAwesomeIcon>
            </div>
          </div>
          <img className="object" src={canie}></img>
        </div>
      </div>
      <a href="https://icons8.com/icon/uJM6fQYqDaZK/typescript">
        TypeScript icon by Icons8
      </a>
      <a href="https://icons8.com/icon/21896/api">API icon by Icons8</a>
      <a href="https://icons8.com/icon/t5K2CR8feVdX/react">
        React icon by Icons8
      </a>
      <a href="https://icons8.com/icon/tGvHBPJaKqEd/javascript">
        JavaScript icon by Icons8
      </a>
      <a href="https://icons8.com/icon/QBqFNfPPB2Kx/sass">
        Sass icon by Icons8
      </a>
      <a href="https://icons8.com/icon/87330/google-firebase-console">
        Google Firebase Console icon by Icons8
      </a>
    </div>
  );
}

export default Portfolio;
