import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './404_style.css'

function Page_not_found() {
    return (
        <div className='about-custom-height container-fluid notfound-mb-footer-324 p-0 notfound-page'>
            <Navbar />
            <div className='container h-100 d-flex justify-content-center align-items-center'>
                <h1>Error 404<br/>Page not found</h1>
            </div>
        </div>
    )
}

export default Page_not_found