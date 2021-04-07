import React from 'react';

import '../css/brief.css'
import projectBrief from '../images/idea-brief.png';

function Brief(props) {
    return (
        <div className="brief">
            <h3>Brief</h3>
            <div className="image-brief-container">
                <img src={projectBrief} alt="Project Brief" className="image-brief" />
            </div>
        </div>
    );
}

export default Brief;