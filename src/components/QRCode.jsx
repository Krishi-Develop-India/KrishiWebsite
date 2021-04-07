import React from 'react';

import '../css/qrcode.css';

function QRCode({client, tractor}) {
    return (
        <div className="qrcode">
            <h3 className="left-tag">Scan with Expo go on android or with  Iphone to enjoy the service</h3>
            <div className="qr-code-container-outer">
                <div className="qr-code-container-inner qr-code-margin-right">
                    <img src={client} alt="QR Code for client" className="image-qr" />
                    <h3 className="qr-code-name">Client App</h3>
                </div>
                <div className="qr-code-container-inner">
                    <img src={tractor} alt="QR Code for tractor" className="image-qr" />
                    <h3 className="qr-code-name">Tractor App</h3>
                </div>
            </div>
        </div>
    );
}

export default QRCode;