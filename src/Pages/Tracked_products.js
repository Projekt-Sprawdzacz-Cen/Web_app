import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { withRouter } from 'react-router-dom';

function Tracked_products() {
    return (
        <div>
            <Navbar />
            Śledzone produkty
        </div>
    )
}

export default withRouter(Tracked_products)