// Libs
import React from 'react';
// Components
import Heading from '../components/Heading.js';
import FeatureContent from '../components/FeatureContent.js';

const Featured = () => {
		return (
			<div className={["section"].join(' ')}>
				<div className={["container"].join(' ')}>
					<Heading />
					<FeatureContent />
				</div>
			</div>
		);
	}

export default Featured;
