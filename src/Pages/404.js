import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './404-style.css'

function Page_not_found() {
    return (
        <>
            <Navbar />
            <div className='container p-0 notfound-custom-div'>
                <div className='container h-100 d-flex justify-content-center align-items-center'>
                    <h1>Error 404<br/>Page not found</h1>
                </div>
            </div>
        </>
    )
}

export default Page_not_found