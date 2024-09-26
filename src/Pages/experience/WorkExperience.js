import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ProjectCard from '../../Components/projectCard/ProjectCard';
import { workExperiences } from '../../data';
import './WorkExperience.css';

export default function WorkExperience() {
    return (
        <ScrollableAnchor id={"experience"}>
            <div className="home-section">
                <div className='projects'>
                    <h3>&lt;Projects&gt;</h3>
                    <div className="projects-cards">
                        {workExperiences.experience.map((card, index) => {
                            return (
                                <div key={index} className='exp-row'>
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
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}
