import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './Tracked-products-style.css';

function Tracked_products() {
    return (
        <div>
            <Navbar />
            <div className='row d-flex mx-0 justify-content-center text-center tracked-custom-div'>
                <h2>Śledzone produkty</h2>
                <form className="needs-validation mt-4 w-25" action="/action_page.php" novalidate>
                    <input type="text" id="user_name" className="form-control me-2" placeholder="Wpisz poszukiwany i śledzony produkt" name="user_name" required/>
                    <div className="invalid-feedback">
                        Nic nie wpisano do tego pola!
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Tracked_products