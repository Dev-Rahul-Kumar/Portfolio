import React from 'react';
import "./App.css";
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      

      <div className="App">
        <Router>
          <Navbar />

          <Switch>

            <Route exact path="/">

              <Home />

            </Route>

            <Route exact path="/project">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>

    </>
  );
}

export default App;
