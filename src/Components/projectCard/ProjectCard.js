import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ cardInfo }) {

    const GetDescBullets = ({ descBullets }) => {
        return descBullets ? descBullets.map((item, index) => <li key={index} className="bullet-item">{item}</li>) : null
    }

    return (
        <li className="card">
            {/* <div className='cardInner'> */}
            {/* <a href={cardInfo.link} className="projectLink"></a>  */}
            <img src={cardInfo.companylogo} alt={cardInfo.alt} />
            {/* </div> */}
        </li>
    );
}
