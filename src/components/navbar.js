import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container-fluid d-flex justify-content-center" style={{backgroundColor: "rgb(230, 230, 230)"}}>
			
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: "0px"}}>
                <div className="container" style={{backgroundColor: "rgb(230, 230, 230)"}}>

					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="btn btn-outline-secondary" onClick={() => {window.location.href="/"}} style={{padding: "18px", fontSize: "17px", borderRadius: "0px"}}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-secondary" onClick={() => {window.location.href="/"}} style={{padding: "18px", fontSize: "17px", borderRadius: "0px"}}>
								Features
							</Link>
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-secondary" onClick={() => {window.location.href="/about_us"}} style={{padding: "18px", fontSize: "17px", borderRadius: "0px"}}>
								About us
							</Link>
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-secondary" to="/" style={{padding: "18px", fontSize: "17px", borderRadius: "0px"}}>
								Our address
							</Link>
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-secondary" onClick={() => {window.location.href="/tracked_products"}} style={{padding: "18px", fontSize: "17px", borderRadius: "0px"}}>
								Tracked products
							</Link>
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-secondary" onClick={() => {window.location.href="/panel_logowania"}} style={{padding: "18px", fontSize: "17px", borderRadius: "0px"}}>
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