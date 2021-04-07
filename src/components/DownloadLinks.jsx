import React from 'react';
import Button from './Button';
import axios from 'axios';

import '../css/download-links.css';
import download from '../images/download.png'

const handleClick = () => {
    console.log('downloading...');
    const url = window.URL.createObjectURL('192.168.43.102/download/brief');
    let a = document.createElement('a');
    a.href = url;
    a.download = 'brief.pdf';
    a.click();
}

function DownloadLinks(props) {
    return (
        <div className="download-links">
            <Button source={download} styleButton="button-download-links" download>Brief</Button>
            <Button source={download} styleButton="button-download-links">Proposal</Button>
            <Button source={download} styleButton="button-download-links">UML</Button>
            <Button source={download} styleButton="button-download-links">PPT</Button>
        </div>
    );
}

export default DownloadLinks;