import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between">
			<img className="logoImg" src="https://image.flaticon.com/icons/png/512/67/67040.png" />
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<button type="button" id="principalButton" className="btn btn-info button">
								<Link to="/">
									<span className="navbar-brand mb-0 h1">Login</span>
								</Link>
							</button>
						</li>

						<li className="nav-item">
							<button type="button" id="principalButton" className="btn btn-info button">
								<Link to="/">
									<span className="navbar-brand mb-0 h1">Register</span>
								</Link>
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</nav>
	);
};
