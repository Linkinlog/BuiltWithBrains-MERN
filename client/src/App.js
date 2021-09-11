import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Navbar } from './components/layout/Navbar';
import { CoachesMain } from './components/Coaches/CoachesMain';
import CoachState from './Context/coaches/CoachState';
import { NotFound } from './components/layout/NotFound';
import { Overview } from './components/Overview';
import { About } from './components/About';
import { Footer } from './components/layout/Footer';
const App = () => {
	return (
		<CoachState>
			<Router>
				<Navbar />
				<div className='container-fluid'>
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route exact path='/coaches' component={CoachesMain} />
						<Route exact path='/overview' component={Overview} />
						<Route exact path='/about' component={About} />
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</Router>
		</CoachState>
	);
};

export default App;
