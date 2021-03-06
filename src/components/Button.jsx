import React from 'react';

import { NavLink } from 'react-router-dom'

import '../css/button.css'

function Button({source, alt, children, styleButton, styleImage, route, external, download, handleClick, simple}) {
    let location = ""+route;
    if(external) {
        return (
            <button className={"button "+styleButton} onClick={() => window.location.href=route}>
                {source && <img src={source} alt={alt} className={"image "+styleImage} /> }
                <h3 className="text">{children}</h3>
            </button>
        );
    } 
    else if(download) {
        return (
            <button className={"button "+styleButton} onClick={handleClick}>
                {source && <img src={source} alt={alt} className={"image "+styleImage} /> }
                <h3 className="text">{children}</h3>
            </button>
        );
    }
    else if(simple) {
        return (
            <button className={"button "+styleButton}>
                {source && <img src={source} alt={alt} className={"image "+styleImage} /> }
                <h3 className="text">{children}</h3>
            </button>
        );
    }
    return (
        <NavLink className={"button "+styleButton} to={location}>
            {source && <img src={source} alt={alt} className={"image "+styleImage} /> }
            <h3 className="text">{children}</h3>
        </NavLink>
    );
}

export default Button; 