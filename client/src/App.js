import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Layout components
import { Navbar } from './components/layout/Navbar';
import { NotFound } from './components/layout/NotFound';
// Main components
import { Landing } from './components/Landing';
import { CoachesMain } from './components/Coaches/CoachesMain';
import { Overview } from './components/Overview';
import { About } from './components/About';
import { Register } from './components/auth/Register';
// Contexts
import { AuthState } from './Context/auth/AuthState';
import CoachState from './Context/coaches/CoachState';

const App = () => {
	return (
		<AuthState>
			<CoachState>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route exact path='/coaches' component={CoachesMain} />
						<Route exact path='/overview' component={Overview} />
						<Route exact path='/about' component={About} />
						<Route exact path='/register' component={Register} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</CoachState>
		</AuthState>
	);
};

export default App;
