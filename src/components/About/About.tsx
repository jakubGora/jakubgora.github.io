import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
            gustu tworzenie aplikacji frontendowych. Obecnie współtworze aplikacje frotowe firmy STS S.A. w Angularze. W przyszłości chce rozwijać się w tym kierunku i tworzyć ciekawe projekty z których będę czerpał dużo satysfakcji.

            <br />
            Zapraszam na swojego{" "}
            <a href="https://github.com/jakubGora">githuba</a>.
          </p>

          <div className="btns">
            {" "}
            <Link to="/portfolio">
              <div className="btn">
                <p>Portfolio</p>
              </div>
            </Link>
            <div
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1hpyoMOdJXUYASIf1F0aA6Wgs1jkhb-Fv/view?usp=sharing",
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
