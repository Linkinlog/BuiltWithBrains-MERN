import React, { Fragment, useRef } from 'react'
export const Navbar = () => {
    const navBar = useRef(null);
    const onClick = () => {
        const navbar = navBar.current
        !navbar.classList.contains('bg-main') ? navbar.classList.add('bg-main') : navbar.classList.remove('bg-main')
    }
    return (
        <Fragment>
            <nav id="navbar" ref={navBar} className="navbar sticky-top navbar-expand-lg navbar-dark p-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href=" ">
                    <img src="/logo-larger-bg.png" alt="" width="30" height="36" className="d-inline-block align-text-center"/>
                    Built With Brains
                    </a>
                    <button className="navbar-toggler" id="navBtn" onClick={onClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-5">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item ms-5">
                                <a className="nav-link" href="/coaches">Coaches</a>
                            </li>
                            <li className="nav-item ms-5">
                                <a className="nav-link" href="/training">Training</a>
                            </li>
                            <li className="nav-item ms-5">
                                <a className="nav-link" href="/shop">Shop apparel</a>
                            </li>
                            <li className="nav-item ms-5">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ms-5">
                                <a className="btn nav-btn" id="log-in-btn" href=" ">Login</a>
                            </li>
                            <li className="nav-item ms-5">
                                <a className="btn nav-btn" id="sign-up-btn" href=" ">Sign-Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )

    
}
