import React, { Component } from 'react';
import Slide from "react-reveal/Slide";
import Social from '../../Components/social/Social';
import Button from '../../Components/button/Button';
import image from '../../assets/images/derrick.jpg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-section" id="home">
                {/* <div className="container"> */}
                    <aside className="side">
                        <figure class="picture">
                            <div className='picture-shadow'></div>
                            <img src={image} alt="portrait of Derrick" className="picture-image" width="320" height="320"></img>
                        </figure>
                    </aside>
                    <main className="about">
                        <h3>&lt;Hello, World&gt;</h3>
                        <p className='introduction'>My Name is Derrick Korir. I am a Full Stack Developer from Nairobi.</p>
                        <div className="contact">
                            <Button
                                text={'CONTACT ME'}
                                href={'/home'}
                                newTab={false}
                            />
                        </div>
                    </main>
                {/* </div> */}
            </div>
        );
    }
}

export default Home;