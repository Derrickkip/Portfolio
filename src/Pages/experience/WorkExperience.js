import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ProjectCard from '../../Components/projectCard/ProjectCard';
import { workExperiences } from '../../data';
import './WorkExperience.css';

export default function WorkExperience() {
    return (
            <ScrollableAnchor id={"experience"}>
                <div className="experience-container" id="workExperience">
                    <div className="experience-cards-div">
                        {workExperiences.experience.map((card) => {
                            return (
                                <ProjectCard
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        companylogo: card.companylogo,
                                        role: card.role,
                                        link: card.link,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </ScrollableAnchor>
    )
}
