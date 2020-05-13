import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Dashboard} />
			<Route exact path="/repository/:repository+" component={Repository} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
