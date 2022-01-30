import React from 'react';

export const Landing = () => {
	return (
		<div className='pb-5'>
				<div className='row landing-main hotBorder'>
					<div className='col-md z-2'>
						<div className='col-md-8 offset-md-2'>
							<p className='tag-line text-center'>Change your life with Built with Brains</p>
						</div>
					</div>
				</div>
				<div className='row mt-4'>
					<div className='col-md-4 offset-md-4 mb-2'>
						<h4 className='text-center'>The mission of BWB is to educate others on how to live a healthier more functional life through sustainable and affordable lifestyle changes</h4>
					</div>
					<div className='col-md-8 offset-md-2 p-0'>
						<img className='img-fluid rounded hotBorder' src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1' alt='workout' />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-8 offset-md-2 mt-5 px-0'>
						<h4 className='text-center secondp'>I am only one but still I am one, I cannot do everything but still I can do something</h4>
						<img src='https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1' alt='' className='img-fluid rounded hotBorder mt-4' />
					</div>
				</div>
		</div>
	);
};
