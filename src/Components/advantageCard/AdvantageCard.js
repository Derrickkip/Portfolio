import React from "react";

import './AdvantageCard.css'

export default function AdvantageCard({ cardInfo }) {
    return (
        <div className="advantageCard">
            <img src={cardInfo.src}
                alt={cardInfo.alt
                } />
            <h2>{cardInfo.title}</h2>
            <p>{cardInfo.details}</p>
        </div>
    )
}