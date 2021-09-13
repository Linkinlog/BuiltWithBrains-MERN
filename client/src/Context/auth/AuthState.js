import React, { useReducer } from 'react';
import { AuthContext } from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import { REGISTER_FAIL, REGISTER_SUCCESS } from '../types';

export const AuthState = (props) => {
	const initialState = {
		token : localStorage.getItem('token'),
	};

	const register = async user => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}
		try {
			const res = await axios.post( '/login/register' , user , config )
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			})
		} catch (error) {
			dispatch({
				type: REGISTER_FAIL,
				payload: error.response.data.msg
			})
		}
	}

	const [state, dispatch] = useReducer(authReducer, initialState);
	
	return (
		<AuthContext.Provider 
			value={{
				token : state.token,
				register,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}
