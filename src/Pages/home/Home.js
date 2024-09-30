import React, { Component } from 'react';
import Social from '../../Components/social/Social';
import Button from '../../Components/button/Button';
import image from '../../assets/images/derrick.jpg';
import './Home.css';

export default function Home() {
    return (
        <div className="home-section" id="home">
            <aside className="side">
                <figure className="picture">
                    <div className='picture-shadow'></div>
                    <img src={image} alt="portrait of Derrick" className="picture-image" width="320" height="320"></img>
                </figure>
            </aside>
            <main className="about">
                <h3>&lt;Hello, World&gt;</h3>
                <p className='introduction'>My Name is Derrick&nbsp;Korir. I am a full stack developer from Nairobi.</p>
                <div className="contact">
                    <Button
                        text={'CONTACT ME'}
                        href={'#contact'}
                    />
                </div>
            </main>
            {/* <Social /> */}
        </div>
    );
}