import React from 'react';
import Navbar from './Navbar';

import '../css/navBar-docs.css';
import '../css/docs.css';

function Documentation(props) {
    return (
        <>
            <Navbar />
            <div class="docs-grid">
                <section class="docs-container">
                    <p class="banner">Documentation page is under development</p>
                </section>
            </div>
        </>
    );
}

export default Documentation;