import React from "react";

import './AdvantageCard.css'

export default function AdvantageCard({ cardInfo }) {
    return (
        <div className="advantageCard">
            <img src={cardInfo.src}
                alt={cardInfo.alt
                } />
            <p className="cardTitle">{cardInfo.title}</p>
            <p className="cardDetails">{cardInfo.details}</p>
        </div>
    )
}