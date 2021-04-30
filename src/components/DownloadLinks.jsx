import React from 'react';
import Button from './Button';
import axios from 'axios';

import '../css/download-links.css';
import download from '../images/download.png'

const handleClickBrief = () => {
    console.log('downloading...');
    let a = document.createElement('a');
    a.href = 'https://krishi-india.herokuapp.com/download/brief.pdf';
    a.download = 'krishi-brief.pdf';
    a.click();
    a.remove();
}

const handleClickProposal = () => {
    console.log('downloading...');
    let a = document.createElement('a');
    a.href = 'https://krishi-india.herokuapp.com/download/proposal.pdf';
    a.download = 'krishi-proposal.pdf';
    a.click();
    a.remove();
}

const handleClickUML = () => {
    console.log('downloading...');
    let a = document.createElement('a');
    a.href = 'https://krishi-india.herokuapp.com/download/uml.pdf';
    a.download = 'krishi-uml.pdf';
    a.click();
    a.remove();
}

const handleClickPPT = () => {
    console.log('downloading...');
    let a = document.createElement('a');
    a.href = 'https://krishi-india.herokuapp.com/download/ppt.pptx';
    a.download = 'krishi-ppt.pptx';
    a.click();
    a.remove();
}


function DownloadLinks(props) {
    return (
        <div className="download-links">
            <Button source={download} styleButton="button-download-links" download handleClick={handleClickBrief}>Brief</Button>
            <Button source={download} styleButton="button-download-links">Proposal</Button>
            <Button source={download} styleButton="button-download-links" download handleClick={handleClickUML}>UML</Button>
            <Button source={download} styleButton="button-download-links" download handleClick={handleClickPPT}>PPT</Button>
        </div>
    );
}

export default DownloadLinks;