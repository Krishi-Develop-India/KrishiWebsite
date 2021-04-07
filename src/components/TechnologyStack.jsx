import React from 'react';

import '../css/technologystack.css'
import reactImage from '../images/react.png';
import nodejsImage from '../images/nodejs.png';
import mongodbImage from '../images/mongodb.png';
import androidImage from '../images/android.png';

function TechnologyStack({technologies}) {
    return (
        <div className="technology-stack">
            <h3>Technology Stack</h3>
            <div className="technologies-container">
                <img src={nodejsImage} alt="NodeJS" className="image-technology nodejs-image" />
                <img src={androidImage} alt="Android" className="image-technology android-image" />
                <img src={mongodbImage} alt="MongoDB" className="image-technology mongodb-image" />
                <img src={reactImage} alt="React" className="image-technology react-image" />
            </div>
        </div>
    );
}

export default TechnologyStack;