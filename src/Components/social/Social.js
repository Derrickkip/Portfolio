import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
    render() {
        return (
            <div className="social-media-div">
                <a href="https://github.com/Derrickkip" className="icon-button github" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    <span></span>
                </a>
                <a href="https://www.linkedin.com/in/derrick-korir/" className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                    <span></span>
                </a>
                <a href="mailto:derrick.korir@gmail.com" className="icon-button google" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-google"></i>
                    <span></span>
                </a>
            </div>
        );
    }
}

export default Social;