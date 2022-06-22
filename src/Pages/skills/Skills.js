import React from "react";
import Slide from 'react-reveal/Slide';
import ScrollableAnchor from 'react-scrollable-anchor';
import "./Skills.css";
import image from '../../assets/images/image4.svg';
import { skills } from '../../data';

export default function Skills() {
    return (
        // <ScrollableAnchor id={skills}>
            <div className="main" id="skills">
                <div className="skills-main-div">
                            <h1 className="skills-heading">Skills</h1>
                            <div className="software-skills-main-div">
                                    {skills.softwareSkills.map(skills => {
                                        return (
                                            <div className="software-skill-inline" key={skills.skillName}>
                                                <i className={skills.fontAwesomeClassname+" icon"}></i>
                                                <p className="skill-name">{skills.skillName}</p>
                                                <div>
                                                {skills.miniSkills.map(mini=> {
                                                    return (<span className="mini">{mini + ', '}</span>)
                                                })}
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                </div>
            </div>
        // </ScrollableAnchor>
    )
}