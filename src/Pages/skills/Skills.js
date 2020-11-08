import React from "react";
import Slide from 'react-reveal/Slide';
import ScrollableAnchor from 'react-scrollable-anchor';
import "./Skills.css";
import image from '../../assets/images/image4.svg';
import { skills } from '../../data';

export default function Skills() {
    return (
        <ScrollableAnchor id={skills}>
            <div className="main" id="skills">
                <div className="skills-main-div">
                    <Slide left cascade>
                        <div className="skills-image-div">
                            <img alt="Derrick working" src={image}></img>
                        </div>
                    </Slide>
                    <Slide right cascade>
                        <div className="skills-text-div">
                            <h1 className="skills-heading">Skills & Experience</h1>
                            <p className="subTitle skills-text-subtitle">The main area of my expertise is back end development. <br/><br/>
                            Python, Flask, Django, Django Rest Framework <br/><br/>
                            I also have experience in frontend development(client side of the web) with javascript libraries like (react, redux, typescript)</p>
                            <div className="software-skills-main-div">
                                <ul className="dev-icons">
                                    {skills.softwareSkills.map(skills => {
                                        return (
                                            <li className="software-skill-inline" key={skills.skillName}>
                                                <img src={skills.svgIcon} className="skill-icons" alt={skills.skillName}></img>
                                                <p>{skills.skillName}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </ScrollableAnchor>
    )
}