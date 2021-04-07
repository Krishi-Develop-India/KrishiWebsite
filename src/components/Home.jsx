import React from 'react';

import Navbar from './Navbar';
import QRCode from './QRCode';
import TechnologyStack from './TechnologyStack';
import Footer from './Footer';
import Brief from './Brief';

import DownloadLinks from './DownloadLinks';
import qrcode from '../images/qr-code.png';

function Home(props) {
    return (
        <>
        <Navbar />
        <QRCode client={qrcode} tractor={qrcode} />
        <TechnologyStack  />
          <Brief />
          <DownloadLinks />
          <Footer />
        </>
    );
}

export default Home;