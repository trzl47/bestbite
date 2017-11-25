// Components
import BestBite from '../app/BestBite.js';
import NotFound from '../app/NotFound';

export default {
	routes: [
		{
			path: '/',
			component: BestBite,
			exact: true
		},
		{
		path: '*',
		component: NotFound,
		exact: false
		}
	],
	redirects: [
		{
			// from: '/people',
			// to: '/user',
			// status: 301
		}
	]
};