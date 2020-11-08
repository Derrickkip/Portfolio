import React, { useState, createRef } from 'react';
import Flip from 'react-reveal/Flip';
import './ProjectCard.css';
import ColorThief from "colorthief";

export default function ProjectCard({ cardInfo }) {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }

    const GetDescBullets = ({ descBullets }) => {
        return descBullets ? descBullets.map((item) => <li className="bulletItem">{item}</li>) : null
    }

    return (
        <Flip left>
            <div className="project-card">
                <div style={{ background: rgb(colorArrays) }} className="project-banner">
                    <div className="project-blurred_div"></div>
                    <div className="project-div-company">
                        <h5 className="project-text-company">{cardInfo.company}</h5>
                    </div>
                    <img crossOrigin={"anonymous"} ref={imgRef} className="project-roundedimg" src={cardInfo.companylogo} alt={cardInfo.company} onLoad={() => getColorArrays()} />
                </div>
                <div className="project-text-details">
                    <h5 className="project-text-role">{cardInfo.role}</h5>
                    <h5 className="project-text-date">{cardInfo.date}</h5>
                    <p className="project-text-link"><a href={cardInfo.link} target="_blank" rel="noopener noreferrer">{cardInfo.link.substring(12,)}</a></p>
                    <p className="subTitle project-text-desc">{cardInfo.desc}</p>
                    <ul>
                        <GetDescBullets descBullets={cardInfo.descBullets} />
                    </ul>
                </div>
            </div>
        </Flip>
    );
}
