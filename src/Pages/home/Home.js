import React, { Component } from 'react';
import Slide from "react-reveal/Slide";
import Social from '../../Components/social/Social';
import Button from '../../Components/button/Button';
import image from '../../assets/images/derrick.jpg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            // <Slide left cascade>
                <div className="home-page" id="home">
                    <div className="home-main">
                        <div className="home-image">
                            <img src={image} alt="derrick working" className="home-image"></img>
                            <h2 id="my-name">Derrick Korir</h2>
                            <h3 id="job-title">Software Engineer</h3>
                            <h4 id="job-place">Freelance</h4>
                            <Social />
                            {/* <div className="intro-buttons">
                                <Button text="Contact me" href="#contact" />
                                <Button text="View my resume" newTab={true} href="https://drive.google.com/file/d/1V7aplAb3P1ZC-U2utkI0KDiYqCIc87k6/view?usp=sharing" />
                            </div> */}
                        </div>
                        <div className="home-text">
                            {/* <div className="about"> */}
                                <h1 className="intro">Overview</h1>
                                <p className="intro-small">Hi, I'm Derrick a fullstack software Engineer based in Nairobi. 
                                                           I am a passionate developer who loves coding, open source and the web platform.
                                </p>
                                <p className="intro-small">Aside from my job, I like to create and contribute to open source projects.
                                 This helps me to learn a ton of new stuff, grow as a developer and support other open source projects.
                                </p>
                                
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            // </Slide>
        );
    }
}

export default Home;