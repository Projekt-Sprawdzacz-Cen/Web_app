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
						<li className="nav-item">
							<Link className="btn btn-outline-secondary custom-btn-nav" onClick={() => {window.location.href="/panel_logowania"}}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
									<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459
									3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002
									4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3
									6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
								</svg>
							</Link>
						</li>
					</ul>


					

				</div>
			</nav>

    	</div>
    );
}

export default Navbar;