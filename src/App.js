import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/home/Home';
import Skills from './Pages/skills/Skills';
import Experience from './Pages/experience/WorkExperience';
import Contact from './Pages/contact/Contact';
import './assets/fonts/Font Awesome 5 Pro Solid.woff'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div class="overlay"></div> */}
      <Navbar />
      <Home />
      <Skills />
      {/* <Skills />
      <Experience />
      <Contact /> */}
    </div>
  );
}

export default App;
