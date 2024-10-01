import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import "./Skills.css";
import { skills, skillAdvantages } from '../../data';
import AdvantageCard from "../../Components/advantageCard/AdvantageCard";

export default function Skills() {
    return (
        <ScrollableAnchor id={"skills"}>
            <div className="home-section">
                <div className="skills-container">
                    <div className="skills">
                        <div className="overview">
                            <h3>&lt;Skills&gt;</h3>
                            <p className="introduction">Skills I possess as a specialist</p>
                            <ul>
                                <li>Backend Development</li>
                                <li>Frontend Development</li>
                                <li>Test Driven Development</li>
                                <li>Magento E-commerce development</li>
                            </ul>
                        </div>
                        <div className="icons">
                            {skills.softwareSkills.map(skills => {
                                return (
                                    <div className="software-skill-inline" key={skills.skillName}>
                                        <img alt="skill-icon"
                                            src={skills.svgIcon}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="advantages">
                        <h3>&lt;Strengths&gt;</h3>
                        <div className="strengths">
                            {skillAdvantages.advantages.map((experience, index) => {
                                return (
                                    <AdvantageCard
                                        cardInfo={experience}
                                        key={index}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}