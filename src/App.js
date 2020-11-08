import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/home/Home';
import Skills from './Pages/skills/Skills';
import Experience from './Pages/experience/WorkExperience';
import Contact from './Pages/contact/Contact';
import './assets/fonts/Font Awesome 5 Pro Solid.woff'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Skills/>
        <Experience/>
        <Contact/>
    </div>
  );
}

export default App;
