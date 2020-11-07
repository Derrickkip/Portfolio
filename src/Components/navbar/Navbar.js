import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

function TopNavbar() {
    return (
        <nav>
            <header className="header">
                <span className="logo">
                    <Link to="/">
                        <span className="grey-color">&lt; </span>
                        <span className="logo-name">Derrick Korir</span>
                        <span className="grey-color"> /&gt;</span>
                    </Link>
                </span>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu">
                    <li className="item">
                        <Link to="skills" className="link">Skills</Link>
                    </li>
                    <li className="item">
                        <Link to="experience" className="link">Work Experience</Link>
                    </li>
                    <li className="item">
                        <Link to="blog" className="link">Blogs</Link>
                    </li>
                    <li className="item">
                        <Link to="contact" className="link">Contact Me</Link>
                    </li>
                </ul>
            </header>
        </nav>
    );
}

export default TopNavbar;