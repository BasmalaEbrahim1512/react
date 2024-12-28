import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
            <a href="index.html" className="navbar-brand ms-lg-5">
                <h1 className="display-5 m-0 text-primary">
                    <span className="text-success">Berimbolo</span>
                </h1>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav py-0">
                    <Link to='/' className="nav-item nav-link">
                        Home
                    </Link>
                    <Link to='/About' className="nav-item nav-link">
                        About
                    </Link>
                    <Link to='/Service' className="nav-item nav-link">
                        Service
                    </Link>
                    <Link to='/Contact' className="nav-item nav-link">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};



export default Navbar