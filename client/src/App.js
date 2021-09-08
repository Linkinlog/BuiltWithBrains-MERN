import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Navbar } from './components/layout/Navbar';
import { CoachesMain } from './components/Coaches/CoachesMain';
import { MainContextProvider } from './Context/MainContext';
import { NotFound } from './components/layout/NotFound';

const App = () => {
	return (
		<MainContextProvider>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/coaches' component={CoachesMain} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</MainContextProvider>
	);
};

export default App;
