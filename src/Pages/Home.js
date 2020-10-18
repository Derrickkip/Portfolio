import React, { Component } from 'react';
import Social from '../Components/Social';
import './Home.css';
import image from '../images/image2.svg';

class Home extends Component {
    render() {
        return (
            <div class="home-page">
                <Social />
                <div class="about">
                    <p class="intro">Hi, 
                    <br/> I'm Derrick,
                    <br/>Software Developer.
                    <br/><span class="intro-small">Frontend Development / Backend Development / QA</span>
                    </p>
                </div>
                <div class="svg-logo">
                    <img src={image} alt="developer" class="home-image"></img>
                </div>
            </div>
        );
    }
}

export default Home;