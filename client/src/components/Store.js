import React from 'react';
import { Link } from 'react-router-dom';

export const Store = () => {
	return (
		<div className='notFound'>
			<div className='row'>
				<div className='col-md-6 offset-md-3 pt-5'>
					<div className='card text-center m-5 hotBorder'>
						<img src='https://images.unsplash.com/photo-1617575520398-551b0b0ac355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Store coming soon!</h5>
							<Link to='/' className="btn btn-info hotBorder">Home</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
