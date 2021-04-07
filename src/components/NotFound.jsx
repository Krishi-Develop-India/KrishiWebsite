import React from 'react';
import { useHistory } from 'react-router-dom';


import '../css/not-found.css'

const handleBack = history => {
    history.goBack();
}

const handleHome = history => {
    history.replace("/");
}

function NotFound(props) {
    const history = useHistory();
    return (
        <div className="not-found">
            <div className="error-404-container">
                <h3 className="error-404-text">404</h3>
            </div>
            <div className="page-not-found-container">
                <h3 className="page-not-found">OOPS! PAGE NOT FOUND</h3>
            </div>         
            <div className="sorry-container">
                <h3 className="sorry">Sorry, the page you're looking for doesn't exist. Please try the following.</h3>
            </div>
            <div className="button-not-found-container">
                <button onClick={() => handleBack(history)} className="btn btn-goback">Go back</button>
                <button onClick={() => handleHome(history)} className="btn btn-home">Home</button>
            </div>
        </div>
    );
}

export default NotFound;