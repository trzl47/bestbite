// Libs
import React from 'react';
// Components
import { Link } from 'react-router-dom';

const Header = () => {
		return (
			<header>
			<div className='header'>
				<div className='container'>
					<nav>
					<div className="row">
						<div className="col-md-4">
							<h1>BestBite</h1>
						</div>
						<div className="col-md-4">
							<ul className="nav-pills nav">
								<li className="active"><Link className="about" to="/about">About</Link></li>
								<li><Link className="signup" to="/signup">Sign Up</Link></li>
								<li><Link className="login" to="/login">Log In</Link></li>
							</ul>
						</div>
					</div>
					</nav>
				</div>
			</div>
			</header>
		);
	}

export default Header;
