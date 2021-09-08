import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div className='notFound'>
			<div className='row'>
				<div className='col-md-6 offset-md-3 pt-5'>
					<div className='card text-center m-5 hotBorder'>
						<img src='https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80' className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Error 404!</h5>
							<p className='card-text'>Sorry about that! Looks like we couldn't find that component, please click here to go home</p>
							<Link to='/' className="btn btn-info">Home</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
