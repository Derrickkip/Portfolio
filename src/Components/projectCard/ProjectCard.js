import React from 'react';
import Flip from 'react-reveal/Flip';
import './ProjectCard.css';

export default function ProjectCard({ cardInfo }) {

    const GetDescBullets = ({ descBullets }) => {
        return descBullets ? descBullets.map((item, index) => <li key={index} className="bullet-item">{item}</li>) : null
    }

    return (
        <Flip left>
            <div className="card">
                <div className="project-text-details">
                    <h5 className="exp-title">{cardInfo.role}</h5>
                    <p className="exp-company"><a href={cardInfo.link} target="_blank" rel="noopener noreferrer">{cardInfo.link.substring(12,)}</a></p>
                    <h5 className="exp-date">{cardInfo.date}</h5>
                    {/* <p className="subTitle project-text-desc">{cardInfo.desc}</p> */}
                    <ul>
                        <GetDescBullets descBullets={cardInfo.descBullets} />
                    </ul>
                </div>
            </div>
        </Flip>
    );
}
