import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/auth/authContext';

export const Logout = (props) => {
	const authContext = useContext(AuthContext);
	const { logout, isAuthenticated } = authContext;

	useEffect(() => {
		if (!isAuthenticated) props.history.push('/');
	}, [isAuthenticated, props.history]);

	const logoff = () => {
		logout();
	};
	return (
		<div className='container-fluid logoutCard'>
			<div className='col-md-5 pt-5 offset-md-4'>
				<div className='card mt-5 hotBorder'>
					<img src='http://images.clipartpanda.com/exit-clipart-Exit-by-Rones.svg' alt='logout' className='card-img-top' />
					<div className='card-body'>
						<h5 className='card-title text-center text-primary mb-4'>Are you sure you wish to sign out?</h5>
						<div className='d-flex justify-content-evenly'>
							<Link to='/' onClick={logoff} className='btn btn-lg btn-info text-white hotBorder'>
								Yes
							</Link>
							<Link to='/' className='btn btn-lg btn-info text-white hotBorder'>
								No
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
