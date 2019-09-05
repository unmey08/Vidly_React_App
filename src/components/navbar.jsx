import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mb-5 nav-bg-color">
            <Link className="navbar-brand" to="/">Vidly</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink className="nav-link nav-item ml-2" to="/movies">Movies</NavLink>
                    <NavLink className="nav-link nav-item ml-2" to="/customers">Customers</NavLink>
                    <NavLink className="nav-link nav-item ml-2" to="/rentals">Rentals</NavLink>
                </ul>
                <ul className="navbar-nav ml-auto mr-5">
                    <NavLink className="nav-link nav-item" to="/login">Login</NavLink>
                    <NavLink className="nav-link nav-item ml-2" to="/register">Register</NavLink>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;