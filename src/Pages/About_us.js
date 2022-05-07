import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './About_us_style.css';

function About_us() {
    return (
        <div className='about-custom-height container-fluid about-mb-footer-324 p-0 about-page'>
            <Navbar />
            <div className='container d-flex justify-content-center about-mt-50'>
                <ul>
                    <li><h4>Jakub Gelczyński - Web-app</h4></li>
                    <li><h4>Jakub Engielski - Price-scrapper</h4></li>
                </ul>
            </div>
        </div>
    )
}

export default About_us