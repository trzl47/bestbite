// Libs
import React from 'react';
// Components

const FeatureContent = () => {
		return (
			<div className={["row"].join(' ')}>
				<div className="col-md-4">
					<h4>Breakfast</h4>
					<ul>
						<li>Maple French Toast</li>
						<li>Rolled Oats with Berries</li>
					</ul>
				</div>
				<div className="col-md-4">
					<h4>Dinner</h4>
					<ul>
						<li>Black Bean Stuffed Peppers</li>
						<li>Pesto Pasta with Spinach</li>
					</ul>
				</div>
				<div className="col-md-4">
					<h4>Dessert</h4>
					<ul>
						<li>German Chocolate Cake</li>
						<li>Hazelnut Tiramisu</li>
					</ul>
				</div>
			</div>
		);
	}

export default FeatureContent;
