import React, { useContext, useEffect, useState } from 'react';
import { AlertContext } from '../../Context/alert/alertContext';
import { AuthContext } from '../../Context/auth/authContext';
import { Alert } from '../layout/Alert';

export const Login = (props) => {
	const authContext = useContext(AuthContext);
	const { login, isAuthenticated, error, clearErrors } = authContext;
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
	});

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error && error.length !== 0) {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [isAuthenticated, props.history, error]);

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		try {
			login(user);
		} catch (error) {
			console.log('sdfsdf');
			setAlert(error, 'info');
		}
	};
	return (
		<div className='logIn'>
			<div className='row'>
				<div className='col-md-6 offset-md-3 pt-5'>
					<Alert />
					<div className='card rounded rounded-3 m-5 hotBorder'>
						<div className='card-body'>
							<h5 className='card-title text-center'>
								<strong>Login</strong>
							</h5>
							<form onSubmit={onSubmit}>
								<div className='mb-3'>
									<label htmlFor='username' className='form-label'>
										Username
									</label>
									<input onChange={onChange} type='text' className='form-control' id='username' name='username' placeholder='Username' required />
								</div>
								<div className='mb-3'>
									<label htmlFor='password' className='form-label'>
										Password
									</label>
									<input onChange={onChange} type='password' className='form-control' id='password' name='password' placeholder='Password' required />
								</div>
								<div className='mb-3 text-center'>
									<input onChange={onChange} type='submit' value='Login' className='btn btn-info' />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
