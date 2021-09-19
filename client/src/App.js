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
import { Store } from './components/Store';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';
import { Logout } from './components/auth/Logout';
// Contexts
import { AuthState } from './Context/auth/AuthState';
import CoachState from './Context/coaches/CoachState';
import AlertState from './Context/alert/AlertState';
// Utils
import { setAuthToken } from './scripts/utils/setAuthToken';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}
const App = () => {

	return (
		<AuthState>
			<CoachState>
				<AlertState>
					<Router>
						<Navbar />
						<Switch>
							<Route exact path='/' component={Landing} />
							<Route exact path='/coaches' component={CoachesMain} />
							<Route exact path='/overview' component={Overview} />
							<Route exact path='/about' component={About} />
							<Route exact path='/register' component={Register} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/logout' component={Logout} />
							<Route exact path='/shop' component={Store} />
							<Route component={NotFound} />
						</Switch>
					</Router>
				</AlertState>
			</CoachState>
		</AuthState>
	);
};

export default App;
