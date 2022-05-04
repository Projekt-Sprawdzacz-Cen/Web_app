import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './About-us-style.css';

function About_us() {
    return (
        <div className='custom-height'>
            <Navbar />
            <div className='container d-flex justify-content-center mt-50'>
                <ul>
                    <li><h4>Jakub Gelczyński - Web-app</h4></li>
                    <li><h4>Jakub Engielski - Price-scrapper</h4></li>
                    <li><h4>Patryk Biernacki - Desktop-app</h4></li>
                </ul>
            </div>
        </div>
    )
}

export default About_us