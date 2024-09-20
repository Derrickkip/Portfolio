import React from "react";
import "./Button.css";

export default function Button({text, href, newTab}) {
    return (
        <a href={href} className='button' target={newTab && "_blank"}>
            {text}
        </a>
    )
}