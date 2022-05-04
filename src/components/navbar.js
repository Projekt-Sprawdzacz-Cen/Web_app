import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar_style.css';

function Navbar() {
    return (
        <div className="container-fluid d-flex justify-content-center nav-bgcolor">
			
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                <div className="container nav-bgcolor">

					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="btn btn-outline-secondary custom-btn-nav" onClick={() => {window.location.href="/"}}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-secondary custom-btn-nav" onClick={() => {window.location.href="/"}}>
								Features
							</Link>
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-secondary custom-btn-nav" onClick={() => {window.location.href="/about_us"}}>
								About us
							</Link>
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-secondary custom-btn-nav" to="/">
								Our address
							</Link>
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-secondary custom-btn-nav" onClick={() => {window.location.href="/tracked_products"}}>
								Tracked products
							</Link>
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-secondary custom-btn-nav" onClick={() => {window.location.href="/panel_logowania"}}>
								Log out
							</Link>
						</li>
					</ul>

				</div>
			</nav>

    	</div>
    );
}

export default Navbar;