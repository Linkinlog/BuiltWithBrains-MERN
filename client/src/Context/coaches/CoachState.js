import React, { useReducer } from 'react';
import { CoachContext } from './coachContext';
import coachReducer from './coachReducer';
import axios from 'axios';
import { UPDATE_COACHES } from '../types';

const CoachState = (props) => {
	const initialState = {
		coaches: null,
		loading: true,
	};

	const [state, dispatch] = useReducer(coachReducer, initialState);

	// Update coaches
	const updateCoaches = () => {
		return axios.get('/coaches/').then((res) => {
			dispatch({
				type: UPDATE_COACHES,
				payload: res.data,
			});
		});
	};

	// Add coach

	// Delete coach

	// Edit coach

	return (
		<CoachContext.Provider
			value={{
				coaches: state.coaches,
				loading: state.loading,
				updateCoaches,
			}}
		>
			{props.children}
		</CoachContext.Provider>
	);
};

export default CoachState;
