//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from '../app/components/Header.js';
import Home from '../app/containers/Home.js';
import Footer from '../app/components/Footer.js';
import NotFound from './NotFound';

class BestBite extends Component {
  render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact={true} pattern="/" component={Home} />
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer />
			</div>
    );
  }
}

export default BestBite;
