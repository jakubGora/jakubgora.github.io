import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./About.css";

function About() {
  const imge = require("../../img/clip-programming.png");

  const loadSkills = () => {};

  return (
    <div className="About">
      <div className="content">
        <div>
          <h2>
            <strong>T</strong>rochę o mnie
          </h2>
          <p>
            Obecnie studiuje dziennie na Uniwersytecie Śląskim w Katowicach na
            kierunku Informatyka ale już od początku technikum interesowałem się
            programowaniem i poszerzałem swoją wiedzę w tej dziedzinie. Przez te
            parę lat próbowałem róznych technologi i języków między innymi
            tworzenia gier na Androida w Unity czy też robienia natywnych
            aplikacji mobilnych. Ostatecznie jednak najbardziej przypadło mi do
            gustu tworzenie aplikacji frontendowych. Obecnie tworzę frontent
            głównie wykorzystując bibliotekę React.js oraz język TypeScript w
            którym jednocześnie cały czas się dokształcam. Chciałbym w
            przyszłości tworzyć duże aplikację z których każdego dnia będą
            korzystać miliony użytkowników na całym świecie.
            <br />
            Zapraszam na swojego{" "}
            <a href="https://github.com/jakubGora">githuba</a>.
          </p>

          <div className="btns">
            {" "}
            <div
              onClick={() => window.open("./portfolio", "_self")}
              className="btn"
            >
              <a>Portfolio</a>
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1yqLDav7_XE7itoMyUmneXCv2WZeQQdQl/view?usp=sharing",
                  "_blank"
                )
              }
              className="btn cv"
            >
              <a>Moje CV</a>
            </div>
          </div>
        </div>

        <div className="ilustr">
          <img src={imge} alt="img" />{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
