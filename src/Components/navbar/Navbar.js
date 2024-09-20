import React from 'react';
import Slide from "react-reveal/Slide";
import { goToAnchor } from 'react-scrollable-anchor';
import './Navbar.css';

function TopNavbar() {
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        setChecked(!checked)
        console.log(navbarCollapse)
      };

    return (
        <nav>
            <header className="header">
                <input className="menu-btn" type="checkbox" id="menu-btn" checked={checked}/>
                <label className="menu-icon" htmlFor="menu-btn" onClick={toggleNavbarCollapse}>
                    <span className="navicon"></span>
                </label>
                {navbarCollapse && (
                    <ul className="menu">
                        <li className="item">
                            <a href="#home" className="link" onClick={() => {goToAnchor('home'); toggleNavbarCollapse()}}>Home</a>
                        </li>
                        <li className="item">
                            <a href="#skills" className="link" onClick={() => {goToAnchor('skills'); toggleNavbarCollapse()}}>Skills</a>
                        </li>
                        <li className="item">
                            <a href="#experience" className="link" onClick={() => {goToAnchor('experience'); toggleNavbarCollapse()}}>Projects</a>
                        </li>
                        <li className="item">
                            <a href="#blog" className="link" onClick={() => {goToAnchor('blog'); toggleNavbarCollapse()}}>Blog</a>
                        </li>
                        <li className="item">
                            <a href="#contact" className="link" onClick={() => {goToAnchor('contact'); toggleNavbarCollapse()}}>Contact</a>
                        </li>
                    </ul>
                )}
            </header>
        </nav>
    );
}

export default TopNavbar;