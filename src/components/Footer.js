// Libs
import React from 'react';
// Components

const Footer = () => {
		return (
			<div className={["footer"].join(' ')}>
				<div className={["container"].join(' ')}>
					<p> &copy;2014 BestBite</p>
					<p className={["a-center"].join(' ')}><a href="">BestBite.com</a></p>
					<p className={["a-right"].join(' ')}>12 Greentree Lane, Orlando, FL</p>
				</div>
			</div>
		);
	}

export default Footer;
