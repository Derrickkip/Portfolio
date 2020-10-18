import React, { Component } from 'react';
import './Navbar.css';

class TopNavbar extends Component {
    render() {
        return (
            <nav>
                <a href class="logo">
                    <span class="grey-color">&lt;</span>
                    <span class="logo-name"> Derrick Korir </span>
                    <span class="grey-color">/&gt;</span>
                </a>
                <ul>
                    <li>
                        <a href="about">About Me</a>
                    </li>
                    <li>
                        <a href="projects">Projects</a>
                    </li>
                    <li>
                        <a href="resume">Resume</a>
                    </li>
                </ul>
                
            </nav>
        );
    }
}

export default TopNavbar;