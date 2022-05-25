import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Portfolio.css";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
function Portfolio() {
  const canie = require("../../img/canien.png");
  const memo = require("../../img/memory.png");
  const play = require("../../img/playapp.png");

  const finowLogo = require("../../img/logo_finow.png");
  const accessLogo = require("../../img/Microsoft-Access-Logo.png");
  const finow = [
    { url: require("../../img/finow/Finow1.png") },
    { url: require("../../img/finow/Finow2.png") },
    { url: require("../../img/finow/Finow3.png") },
    { url: require("../../img/finow/Finow4.png") },
  ];
  const tie = [
    { url: require("../../img/tieApp/1.png") },
    { url: require("../../img/tieApp/2.png") },
    { url: require("../../img/tieApp/3.png") },
    { url: require("../../img/tieApp/4.png") },
    { url: require("../../img/tieApp/5.png") },
    { url: require("../../img/tieApp/6.png") },
  ];
  const takeCare = [
    { url: require("../../img/takeCare/1.png") },
    { url: require("../../img/takeCare/2.png") },
    { url: require("../../img/takeCare/3.png") },
  ];
  const spaceman = [
    { url: require("../../img/SpaceMan/1.png") },
    { url: require("../../img/SpaceMan/2.png") },
    { url: require("../../img/SpaceMan/3.png") },
  ];
  const unsplash = [
    { url: require("../../img/unSplash/unsplashapp.png") },
    { url: require("../../img/unSplash/onSplash2.png") },
  ];
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
              <h2>
                Narzędziownia dla firmy <br />
                FINOW POLSKA Sp. z o.o.
              </h2>
              <p>
                Aplikacja przeznaczona do <br /> zarządzania oraz obsługi
                narzędziownii.
              </p>
            </div>
            <br />
            {/* <img width={"100px"} height="100px" src={finowLogo} alt="" /> */}
            <div className="tech">
              <img width={"140px"} src={accessLogo} />
            </div>
          </div>

          <SimpleImageSlider
            width={"100%"}
            height={1000}
            autoPlay={true}
            style={{
              position: "relative",
              width: "100%",
              color: "black",

              objectFit: "cover",
            }}
            images={finow}
            showBullets={true}
            showNavs={true}
            navStyle={2}
          />
        </div>
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

          <SimpleImageSlider
            width={"100%"}
            height={1000}
            autoPlay={true}
            style={{
              position: "relative",
              width: "100%",
              color: "black",
              objectFit: "cover",
              objectPosition: "center bottom",
            }}
            images={unsplash}
            showBullets={true}
            showNavs={true}
            navStyle={2}
          />
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
          <SimpleImageSlider
            width={"100%"}
            height={1000}
            autoPlay={true}
            style={{
              position: "relative",
              width: "100%",
              color: "black",
              objectFit: "cover",
              objectPosition: "center bottom",
            }}
            images={tie}
            showBullets={true}
            showNavs={true}
            navStyle={2}
          />
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
        <div style={{ width: "50%" }} className="project">
          <div className="descr">
            {" "}
            <div>
              {" "}
              <h2>Take Care android game</h2>
              <p>Prosta gra ze skaczącą kulką.</p>
            </div>{" "}
            <div className="tech">
              <img
                className="unity"
                src="https://img.icons8.com/ios-filled/100/000000/unity.png"
              />
              <img src="https://img.icons8.com/color/120/000000/c-sharp-logo-2.png" />
              <img src="https://img.icons8.com/fluency/120/000000/android-os.png" />
            </div>{" "}
            <div
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.GoraSoft.TakeCare&hl=pl&gl=US",
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
          <SimpleImageSlider
            width={"100%"}
            height={1000}
            autoPlay={true}
            style={{
              position: "relative",
              width: "100%",
              color: "black",
              objectFit: "cover",
              objectPosition: "center bottom",
            }}
            images={takeCare}
            showBullets={true}
            showNavs={true}
            navStyle={2}
          />
        </div>
        <div style={{ width: "50%" }} className="project">
          <div className="descr">
            {" "}
            <div>
              {" "}
              <h2>Spaceman - kosmiczna podróż</h2>
              <p>Prosta gra o kosmosie.</p>
            </div>{" "}
            <div className="tech">
              <img
                className="unity"
                src="https://img.icons8.com/ios-filled/100/000000/unity.png"
              />
              <img src="https://img.icons8.com/color/120/000000/c-sharp-logo-2.png" />
              <img src="https://img.icons8.com/fluency/120/000000/android-os.png" />
            </div>{" "}
            <div
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.Gravity.Space.Symulator&hl=pl&gl=US",
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
          <SimpleImageSlider
            width={"100%"}
            height={1000}
            autoPlay={true}
            style={{
              position: "relative",
              width: "100%",
              color: "black",
              objectFit: "cover",
              objectPosition: "center bottom",
            }}
            images={spaceman}
            showBullets={true}
            showNavs={true}
            navStyle={2}
          />
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
