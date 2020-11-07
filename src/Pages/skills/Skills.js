import React from "react";
import "./Skills.css";
import image from '../../assets/images/image4.svg';
import {skills} from '../../data';

export default function Skills() {
    return (
        <div className="main">
            <div className="skills-main-div">
                <div className="skills-image-div">
                    <img alt="Derrick working" src={image}></img>
                </div>
                <div className="skills-text-div">
                    <h1 className="skills-heading">What I do</h1>
                    <p className="subTitle skills-text-subtitle">Some technologies that I have worked with professionally</p>
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
            </div>
        </div>
    )
}