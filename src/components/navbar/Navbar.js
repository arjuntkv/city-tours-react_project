import React from 'react'
import logo from '../../logo.svg';
import "./navbar.scss";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <ul className="navlinks">
                <li><a className="navlink" href="/">Home</a></li>
                <li><a className="navlink" href="/">About</a></li>
                <li><a className="navlink" href="/">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
