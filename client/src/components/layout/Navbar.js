import React, { Fragment, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/auth/authContext';
export const Navbar = () => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, loadUser, user } = authContext;
	const navBar = useRef(null);
	const collapse = useRef();

	useEffect(() => {
		loadUser();
		// eslint-disable-next-line
	}, [isAuthenticated]);

	const onClick = () => {
		const navbar = navBar.current;
		if (window.scrollY <= 600) {
			if (!navbar.classList.contains('bg-main')) navbar.classList.add('bg-main');
		}
	};

	const onCollapse = () => {
		if (collapse.current.classList.contains('show')) {
			collapse.current.classList.remove('show');
		}
	};

	return (
		<Fragment>
			<nav id='navbar' ref={navBar} className='navbar fixed-top navbar-expand-xl navbar-dark bg-main p-2'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						<img src='/logo-larger-bg.png' alt='' width='30' height='36' className='d-inline-block me-2' />
						<span>Built With Brains</span>
					</Link>
					<button className='navbar-toggler' id='navBtn' onClick={onClick} type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' ref={collapse} id='navbarNav'>
						<ul onClick={onCollapse} className='navbar-nav'>
							<li className='nav-item ms-2'>
								<Link className='nav-link' to='/'>
									Home
								</Link>
							</li>
							<li className='nav-item ms-2'>
								<Link className='nav-link' to='/coaches'>
									Coaches
								</Link>
							</li>
							<li className='nav-item ms-2'>
								<Link className='nav-link' to='/overview'>
									How this works
								</Link>
							</li>
							<li className='nav-item ms-2'>
								<Link className='nav-link' to='/shop'>
									Shop apparel
								</Link>
							</li>
							<li className='nav-item ms-2'>
								<Link className='nav-link' to='/about'>
									About Us
								</Link>
							</li>
						</ul>
						{!isAuthenticated ? (
							<ul className='navbar-nav ms-auto'>
								<li className='nav-item me-2'>
									<Link className='btn nav-btn' id='log-in-btn' to='/login'>
										Login
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='btn nav-btn' id='sign-up-btn' to='/register'>
										Sign-Up
									</Link>
								</li>
							</ul>
						) : (
							<ul className='navbar-nav ms-auto'>
								<li className='nav-item me-2'>
									<Link className='btn nav-btn' id='log-in-btn' to='/logout'>
										Logout ({user && user.username.charAt(0).toUpperCase() + user.username.slice(1)})
									</Link>
								</li>
							</ul>
						)}
					</div>
				</div>
			</nav>
		</Fragment>
	);
};
