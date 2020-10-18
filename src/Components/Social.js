import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
    render() {
        return (
            <div class="social">
                <a href="https://github.com/Derrickkip" class="social-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github github"></i></a>
                <a href="https://www.linkedin.com/in/derrick-korir/" class="social-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin linkedin"></i></a>
            </div>
        );
    }
}

export default Social;