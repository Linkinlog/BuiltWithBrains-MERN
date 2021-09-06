import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Navbar } from './components/layout/Navbar';
import { CoachesMain } from './components/Coaches/CoachesMain';
import { MainContextProvider } from './Context/MainContext';

function App() {
	return (
		<MainContextProvider>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/coaches' component={CoachesMain} />
				</Switch>
			</Router>
		</MainContextProvider>
	);
}

export default App;
