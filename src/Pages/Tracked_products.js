import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './Tracked_products_style.css';

function Tracked_products() {
    return (
        <div className='container-fluid tracked-mb-footer-324 p-0 tracked-page'>
            <Navbar />

            <div className='container-fluid d-flex flex-wrap mx-0 justify-content-center tracked-custom-div'>
                <h2>Śledzone produkty</h2>

                <div className='container-fluid mx-0 d-flex flex-wrap justify-content-center tracked-custom-div2'>
                    
                        <form className="needs-validation mt-4 w-50 d-flex flex-wrap justify-content-center" action="/action_page.php" noValidate>
                            <button className='tracked-magnifier'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                    className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0
                                        1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                            </button>
                            <input type="text" id="user_name" className="form-control me-2 w-50 tracked-input"
                            placeholder="Wpisz poszukiwany i śledzony produkt" name="user_name" required></input>
                            <div className="invalid-feedback">
                                Nic nie wpisano do tego pola!
                            </div>
                        </form>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Tracked_products