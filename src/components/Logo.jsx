import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/logo.css'

function Logo(props) {
    return (
        <NavLink to="/" className="navlink-logo">
            <div className="logo">
            <h3 className="logo-head">Krishi</h3>
            <h3 className="logo-sub">by case3 technologies</h3>
            </div>
        </NavLink>
    );
}

export default Logo;