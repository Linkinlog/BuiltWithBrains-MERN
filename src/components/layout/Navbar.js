import React, { Fragment, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
export const Navbar = () => {
	const navBar = useRef(null);

	const onClick = () => {
		const navbar = navBar.current;
		!navbar.classList.contains('bg-main') ? navbar.classList.add('bg-main') : navbar.classList.remove('bg-main');
	};

	useEffect(() => {
		const handleScroll = () => {
			const navbar = navBar.current;
			if (window.scrollY >= 600) {
				if (!navbar.classList.contains('bg-main')) navbar.classList.add('bg-main');
			} else {
				if (navbar.classList.contains('bg-main')) navbar.classList.remove('bg-main');
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<Fragment>
			<nav id='navbar' ref={navBar} className='navbar fixed-top navbar-expand-lg navbar-dark p-0'>
				<div className='container-fluid mb-1'>
					<a className='navbar-brand' href=' '>
						<img src='/logo-larger-bg.png' alt='' width='30' height='36' className='d-inline-block me-2' />
						Built With Brains
					</a>
					<button className='navbar-toggler' id='navBtn' onClick={onClick} type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item ms-5'>
								<Link className='nav-link' to='/'>
									Home
								</Link>
							</li>
							<li className='nav-item ms-5'>
								<Link className='nav-link' to='/coaches'>
									Coaches
								</Link>
							</li>
							<li className='nav-item ms-5'>
								<Link className='nav-link' to='/training'>
									Training
								</Link>
							</li>
							<li className='nav-item ms-5'>
								<Link className='nav-link' to='/shop'>
									Shop apparel
								</Link>
							</li>
							<li className='nav-item ms-5'>
								<Link className='nav-link' to='/contact'>
									Contact Us
								</Link>
							</li>
						</ul>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item ms-5'>
								<Link className='btn nav-btn' id='log-in-btn' to=' '>
									Login
								</Link>
							</li>
							<li className='nav-item ms-5'>
								<Link className='btn nav-btn' id='sign-up-btn' to=' '>
									Sign-Up
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};
