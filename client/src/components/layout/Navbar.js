import React, { Fragment, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
	const navBar = useRef(null);
	const collapse = useRef()

	const onClick = () => {
		const navbar = navBar.current;
		if (window.scrollY <= 600) {
			console.log(window.scrollY);
			if (!navbar.classList.contains('bg-main')) navbar.classList.add('bg-main') 
		}
	};

	const onCollapse = () => {
		console.log(collapse.current.classList);
		if (collapse.current.classList.contains('show')) {
			collapse.current.classList.remove('show') 
		}
	}

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
			<nav id='navbar' ref={navBar} className='navbar fixed-top navbar-expand-xl navbar-dark p-2'>
				<div className='container-fluid mb-1'>
					<a className='navbar-brand' href=' '>
						<img src='/logo-larger-bg.png' alt='' width='30' height='36' className='d-inline-block me-2' />
						Built With Brains
					</a>
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
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<Link className='btn nav-btn' id='log-in-btn' to=' '>
									Login
								</Link>
							</li>
							<li className={`nav-item if !collapse.current.classList.contains('show') ms-1 `}>
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
