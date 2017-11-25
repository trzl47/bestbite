// Libs
import React from 'react';
// Components

const Banner = () => {
		return (
			<div className={["section","banner"].join(' ')}>
				<div className={["container"].join(' ')}>
					<h3>Always have the answer to "What's for dinner?"</h3>
					<a className={["btn","btn-lg","btn-default"].join(' ')} href="">Learn More</a>
				</div>
			</div>
		);
	}

export default Banner;
