import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://github.com/Derrickkip" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github github"></i></a>
                <a href="https://www.linkedin.com/in/derrick-korir/" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin linkedin"></i></a>
            </div>
        );
    }
}

export default Social;