import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Start from "./components/Start/Start";
import { useState } from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const scroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    console.log(e);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <div onScroll={(e) => scroll(e)} className="main">
          <Start />
          <About />
          {/* <Portfolio /> */}
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
