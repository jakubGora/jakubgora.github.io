import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Start from "./components/Start/Start";
import { useState } from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="main">
          <Start />
          <About />
          <Portfolio />
        </div>
      </div>
    </Router>
  );
}

export default App;
