import React from 'react';
import ToolTip from '../toolTip/ToolTip';
import './ProjectCard.css';

export default function ProjectCard({ cardInfo }) {

    return (
        <div className="card">
            <div className='cardInner'>
                <div className='image-outer'>
                    <div className='image-inner'>
                        <img src={cardInfo.companylogo} alt={cardInfo.alt} />
                    </div>
                </div>
                <div className='description'>
                    <div className="main-description">
                        <h1>
                            {cardInfo.descriptionHeader}
                        </h1>
                    </div>
                    <div className='tools'>
                        {cardInfo.skills.map((skill, index) => {
                            return (
                                <ToolTip 
                                    key={index}
                                    text={skill}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
