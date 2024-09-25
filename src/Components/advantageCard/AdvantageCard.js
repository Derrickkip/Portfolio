import React from "react";

export default function AdvantageCard({cardInfo}) {
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