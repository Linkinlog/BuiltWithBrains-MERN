import React, { Fragment } from 'react';
import { Footer } from './layout/Footer';

export const Landing = () => {
	return (
		<Fragment>
			<div className=' landing-main'>
				<div className='row' style={{ height: '90vh' }}>
					<div className='col-md'>
						<div className='col-md-6 offset-md-3'>
							<p className='tag-line text-center'>Get ready to change your life with built with brains!</p>
						</div>
					</div>
				</div>
				<div className='row mt-2'>
					<div className='col-md-4 offset-md-4 mb-5'>
						<h4 className='text-center'>Here at Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque asperiores tempora, sit at neque facilis cum inventore ducimus molestiae aliquid natus sunt ut sapiente, autem est error quam illo!</h4>
					</div>
					<div className='mt-3 col-md-8 offset-md-2'>
						<img className='img-fluid rounded' src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1' alt='workout' />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-8 offset-md-2 mt-5'>
						<h4 className='text-center secondp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quae, eaque dolorem minus nostrum voluptate molestiae cupiditate consectetur, facere cum eligendi! Beatae aspernatur, eius in dolor nam nobis nemo nostrum.</h4>
						<img src='https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1' alt='' className='img-fluid rounded mt-2' />
					</div>
				</div>
            <Footer />
			</div>
		</Fragment>
	);
};
