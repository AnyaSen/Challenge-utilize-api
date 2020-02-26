import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import ChannelsPage from './pages/ChannelsPage/ChannelsPage';
import ProgramsPage from './pages/ProgramsPage/ProgramsPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={ProgramsPage} />
				<Route exact path='/channels' component={ChannelsPage} />
				<Route component={ErrorPage} />
			</Switch>
		</div>
	);
}

export default App;
