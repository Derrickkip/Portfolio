import React from "react";
import {Link} from "react-router-dom";
import "./Button.css";

export default function Button({text, className, href, newTab}) {
    return (
        <div className={className}>
            <Link to={href} className="main-button">
                {text}
            </Link>
        </div>
    )
}