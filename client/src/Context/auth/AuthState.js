import React, { useReducer } from 'react';
import { AuthContext } from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import { REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, LOGOUT } from '../types';
import { setAuthToken } from '../../scripts/utils/setAuthToken';
export const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		user: null,
		loading: true,
		error: null,
	};

	// Load user
	const loadUser = async () => {
		setAuthToken(localStorage.token);
		try {
			const res = await axios.get('/api/login');
			dispatch({
				type: USER_LOADED,
				payload: res.data,
			});
		} catch (error) {
			dispatch({ type: AUTH_ERROR });
		}
	};

	// Register user
	const register = async (user) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			user.username = user.username.toLowerCase();
			const res = await axios.post('/api/login/register', user, config);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
			loadUser();
		} catch (error) {
			if (error.response.data.errors) {
				for (let message of error.response.data.errors) {
					dispatch({
						type: REGISTER_FAIL,
						payload: message.msg,
					});
				}
			}
			dispatch({
				type: REGISTER_FAIL,
				payload: error.response.data.msg,
			});
		}
	};

	// Log in user
	const login = async (user) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			user.username = user.username.toLowerCase();
			const res = await axios.post('/api/login', user, config);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			loadUser();
		} catch (error) {
			if (error.response.data.errors) {
				for (let message of error.response.data.errors) {
					dispatch({
						type: LOGIN_FAIL,
						payload: message.msg,
					});
				}
			}
			dispatch({
				type: LOGIN_FAIL,
				payload: error.response.data.msg,
			});
		}
	};

	// Log out user
	const logout = () => {
		dispatch({ type: LOGOUT });
	};

	// Clear errors
	const clearErrors = () => {
		dispatch({ type: CLEAR_ERRORS });
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				loading: state.loading,
				error: state.error,
				register,
				loadUser,
				login,
				logout,
				clearErrors,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
