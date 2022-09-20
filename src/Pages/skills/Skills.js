import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import "./Skills.css";
import { skills } from '../../data';

export default function Skills() {
    return (
        <ScrollableAnchor id={"skills"}>
            <div className="home-section">
                <div className="container">
                    <div className="row featurette">
                        <h1 className="skills-heading">Skills</h1>
                        <div className="software-skills-main-div">
                                {skills.softwareSkills.map(skills => {
                                    return (
                                        <div className="software-skill-inline col-12 col-sm-4" key={skills.skillName}>
                                            <i className={skills.fontAwesomeClassname+" icon"}></i>
                                            <p className="skill-name">{skills.skillName}</p>
                                            <div>
                                            {skills.miniSkills.map((mini, index) => {
                                                return (<span key={index} className="mini">{mini + ', '}</span>)
                                            })}
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}