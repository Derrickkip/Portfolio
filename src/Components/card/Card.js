import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="project_card">
                <img src={this.props.src} alt='' className="project_image"></img>
                <hr/>
                <div className="description">
                    <div className="about">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="technologies">

                    </div>
                </div>
            </div>
        );
    }
}

export default Card;