import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ cardInfo }) {

    return (
        <li className="card">
            {/* <div className='cardInner'> */}
            {/* <a href={cardInfo.link} className="projectLink"></a>  */}
            <img src={cardInfo.companylogo} alt={cardInfo.alt} />
            {/* </div> */}
        </li>
    );
}
