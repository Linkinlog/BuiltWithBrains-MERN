import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/auth/authContext';

export const Register = () => {
	const authContext = useContext(AuthContext)
	const { register } = authContext;
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
	});
	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const onSubmit = e => {
		e.preventDefault();
		try {
			register(user);
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<div className='register'>
			<div className='row'>
				<div className='col-md-6 offset-md-3 pt-5'>
					<div className='card m-5 hotBorder'>
						<div className='card-body'>
							<h5 className='card-title text-center'>
								<strong>Register</strong>
							</h5>
							<form onSubmit={onSubmit}>
								<div className='mb-3'>
									<label htmlFor='email' className='form-label'>
										Email address
									</label>
									<input onChange={onChange} type='email' className='form-control' name='email' id='email' placeholder='name@example.com' required/>
								</div>
								<div className='mb-3'>
									<label htmlFor='username' className='form-label'>
										Username
									</label>
									<input onChange={onChange} type='text' className='form-control' id='username' name='username' placeholder='Username' required/>
								</div>
								<div className='mb-3'>
									<label htmlFor='password' className='form-label'>
										Password
									</label>
									<input onChange={onChange} type='password' className='form-control' id='password' name='password' placeholder='Password' required/>
								</div>
								<div className='mb-3'>
									<label htmlFor='password2' className='form-label'>
										Confirm Password
									</label>
									<input onChange={onChange} type='password' className='form-control' id='password2' name='password2' placeholder='Password confirmation' required/>
								</div>
								<div className='mb-3 text-center'>
									<input onChange={onChange} type='submit' value='Register' className='btn btn-info' />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
