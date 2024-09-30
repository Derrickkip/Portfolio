import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import Home from './Pages/home/Home';
import Skills from './Pages/skills/Skills';
import Experience from './Pages/experience/WorkExperience';
import Contact from './Pages/contact/Contact';
import Social from './Components/social/Social';
import './assets/fonts/Font Awesome 5 Pro Solid.woff'
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
            <Social />
        </div>
    );
}

export default App;
