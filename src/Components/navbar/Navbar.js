import React from 'react';
import Slide from "react-reveal/Slide";
import { goToAnchor } from 'react-scrollable-anchor';
import './Navbar.css';

function TopNavbar() {
    return (
        <Slide top cascade>
            <nav>
                <header className="header">
                    <span className="logo">
                        <a href="/">
                            <span className="grey-color">&lt; </span>
                            <span className="logo-name">Derrick Korir</span>
                            <span className="grey-color"> /&gt;</span>
                        </a>
                    </span>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu">
                        <li className="item">
                            <a href="#skills" className="link" onClick={() => goToAnchor('skills')}>Skills</a>
                        </li>
                        <li className="item">
                            <a href="#experience" className="link" onClick={() => goToAnchor('experience')}>Experience</a>
                        </li>
                        <li className="item">
                            <a href="#blog" className="link" onClick={() => goToAnchor('blog')}>Blogs</a>
                        </li>
                        <li className="item">
                            <a href="#contact" className="link" onClick={() => goToAnchor('contact')}>Contact Me</a>
                        </li>
                    </ul>
                </header>
            </nav>
        </Slide>
    );
}

export default TopNavbar;