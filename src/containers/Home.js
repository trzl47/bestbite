// Libs
import React, { Component } from 'react';
// Components
import Jumbotron from './Jumbotron.js';
import Banner from '../components/Banner.js';
import Featured from './Featured.js';

export default class Home extends Component {
	render() {
		return(
			<div className={["bestbite"].join(' ')}>
				<Jumbotron />
				<Banner />
				<Featured />
			</div>
		);
	}
}
