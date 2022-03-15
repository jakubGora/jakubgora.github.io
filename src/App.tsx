import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Start from "./components/Start/Start";
import { useRef, useState } from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import MySkills from "./components/MySkills/MySkills";

const App: React.FC = () => {
  const [aboutActive, setAboutActive] = useState<boolean>(false);
  const [contactActive, setContactActive] = useState<boolean>(false);
  const [skillsActive, setSkillsActive] = useState<boolean>(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const scroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (e.currentTarget.scrollTop > window.innerHeight / 2) {
      setAboutActive(true);
      aboutRef.current?.classList.add("load");
    }
    if (
      aboutRef.current?.clientHeight &&
      e.currentTarget.scrollTop > window.innerHeight
    ) {
      setSkillsActive(true);
      skillsRef.current?.classList.add("load");
    }
    if (
      aboutRef.current?.clientHeight &&
      e.currentTarget.scrollTop >
        window.innerHeight + aboutRef.current?.clientHeight / 2
    ) {
      setContactActive(true);
      contactRef.current?.classList.add("load");
    }
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <div onScroll={(e) => scroll(e)} className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Start />
                  <div ref={aboutRef} className="elem">
                    <div>{aboutActive ? <About /> : ""}</div>
                  </div>

                  <div ref={skillsRef} className="elem">
                    <div>{skillsActive ? <MySkills /> : ""}</div>
                  </div>
                  <div ref={contactRef} className="elem">
                    <div>{contactActive ? <Contact /> : ""}</div>
                  </div>
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <MySkills />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>

          {/* 
        
          */}
        </div>
      </div>
    </Router>
  );
};

export default App;
