import React from 'react'
import "./Text.css"

function Text({Heading, Paragraph}) {
    return (
        <>
            <p className="third-container-main-text">{Heading}</p>
            <div className="third-container-paragraph">
                <p>{Paragraph}</p>
            </div>
        </>
    )
}

export default Text