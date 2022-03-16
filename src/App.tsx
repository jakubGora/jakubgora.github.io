import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Start from "./components/Start/Start";
import { useEffect, useRef, useState } from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import MySkills from "./components/MySkills/MySkills";
import Loading from "./components/Loading/Loading";

const App: React.FC = () => {
  const [aboutActive, setAboutActive] = useState<boolean>(false);
  const [contactActive, setContactActive] = useState<boolean>(false);
  const [skillsActive, setSkillsActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
  }, []);

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
        {loading ? <Loading setLoading={setLoading} /> : ""}
        <div onScroll={(e) => scroll(e)} className="main">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Start setLoading={setLoading} />
                  <div ref={aboutRef} className="elem">
                    <div>
                      {aboutActive ? <About setLoading={setLoading} /> : ""}
                    </div>
                  </div>

                  <div ref={skillsRef} className="elem">
                    <div>
                      {skillsActive ? <MySkills setLoading={setLoading} /> : ""}
                    </div>
                  </div>
                  <div ref={contactRef} className="elem">
                    <div>
                      {contactActive ? <Contact setLoading={setLoading} /> : ""}
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div onLoad={() => setLoading(true)}>
                  <About setLoading={setLoading} />
                  <MySkills setLoading={setLoading} />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div onLoad={() => setLoading(true)}>
                  <Contact setLoading={setLoading} />
                </div>
              }
            />
            <Route
              path="/portfolio"
              element={
                <div onLoad={() => setLoading(true)}>
                  <Portfolio setLoading={setLoading} />
                </div>
              }
            />
          </Routes>

          {/* 
        
          */}
        </div>
      </div>
    </Router>
  );
};

export default App;
