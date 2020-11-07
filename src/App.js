import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/home/Home';
import Skills from './Pages/skills/Skills';
import Experience from './Pages/experience/WorkExperience';
import Contact from './Pages/contact/Contact';
import './assets/fonts/Font Awesome 5 Pro Solid.woff'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/experience">
            <Experience/>
          </Route>
          <Route path="/skills">
            <Skills/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
