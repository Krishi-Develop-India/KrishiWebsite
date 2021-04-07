import React from 'react';

import Button from './Button';
import Logo from './Logo';
import github from '../images/github.png';

import '../css/navBar.css';

function Navbar(props) {
    return (  
        <div className="navbar">
            <div className="top-nav">
                <Logo />
                <div className="menu-btn">
                    <div className="menu-btn-burger"></div>
                </div>
                <div className="navigation">
                    <Button styleButton="button-navigation" route="/documentation">Docs</Button>
                    <Button styleButton="button-navigation" route="http://192.168.43.102/admin" external>Log in</Button>
                </div>
            </div>
            <div className="para">
                <h3 className="para-sub">Open source learning project</h3>
                <h3 className="para-main">A network of people taking the agriculture industry forward</h3>
            </div>
            <div className="source-code-container">
                <Button styleButton="source-code" source={github} alt="Github" route="https://github.com/Krishi-Develop-India/KrishiUber" external>Souce Code</Button>
            </div>
        </div>
    );
}


export default Navbar;