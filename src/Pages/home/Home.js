import React, { Component } from 'react';
import Slide from "react-reveal/Slide";
import Social from '../../Components/social/Social';
import image from '../../assets/images/derrick.jpg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-section" id="home">
                <div className="container">
                    <div className='row'>
                        <Slide left cascade>
                            <div className="col-12 col-lg-4">
                                <div className='profile'>
                                    <img src={image} alt="portrait of Derrick" className="picture-image"></img>
                                    <h2 className="name">Derrick Korir</h2>
                                    <h3 className="job-title">Software Developer</h3>
                                    <Social />
                                </div>
                            </div>
                        </Slide>
                        <Slide right cascade>
                            <div className="col-12 col-lg-8">
                                <h1 className="intro">Overview</h1>
                                <p className="description">Hi, I'm Derrick a software Developer based in Nairobi with 5 years experience in building applications using a variety of frameworks and languages. Most of my professional development experience has involved working fullstack using Python and Javascript.<br/>
                                I love all aspects of programming and spend most of my free time learning new technologies and improving my skills.<br/><br/>
                                When not planted infront of a computer, I like reading books, taking long runs and occasionally visiting the numerous wild parks we have in Kenya.
                                </p>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;