import React from 'react';
import "./ToolTip.css"

export default function ToolTip({text}) {
    return (
        <div className='tool-tip'>
            {text}
        </div>
    )
}