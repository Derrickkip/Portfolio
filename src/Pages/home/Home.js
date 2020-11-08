import React, { Component } from 'react';
import Slide from "react-reveal/Slide";
import Social from '../../Components/social/Social';
import Button from '../../Components/button/Button'
import image from '../../assets/images/image2.svg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Slide left cascade>
                <div className="home-page" id="home">
                    <div className="home-main">
                        <div className="home-text">
                            <div className="about">
                                <h1 className="intro">Hi, I'm Derrick, </h1>
                                <p className="intro-small">A passionate Software Developer having experience building web applications with Python / Django / Flask / Javascript / React / Redux / Graphql among other libraries and frameworks.</p>
                                <Social />
                                <div className="intro-buttons">
                                    <Button text="Contact me" href="#contact" />
                                    <Button text="View my resume" newTab={true} href="https://drive.google.com/file/d/1ckAbCJcbhiBdD5oqEcDGzxLsb1vtPd0X/view?usp=sharing" />
                                </div>
                            </div>
                        </div>
                        <div className="home-image">
                            <img src={image} alt="derrick working" className="home-image"></img>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default Home;