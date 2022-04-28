import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { withRouter } from 'react-router-dom';

function About_us() {
    return (
        <div>
            <Navbar />
            <div className='container d-flex justify-content-center' style={{height: "450px"}}>
                <ul style={{marginTop: "50px"}}>
                    <li>Jakub Gelczyński - Web-app</li>
                    <li>Jakub Engielski - Desktop-app</li>
                    <li>Patryk Biernacki - Price-scrapper</li>
                </ul>
            </div>
        </div>
    )
}

export default About_us