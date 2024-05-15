import React, { useEffect, useState } from "react";

const NavBar = ({ onSelect }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        onSelect(darkMode);
    }, [darkMode, onSelect]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">
                    GDCS
                </a>
                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/#home" className="nav__link" onClick={closeMenu}>Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="/#about" className="nav__link" onClick={closeMenu}>About us</a>
                        </li>
                        <li className="nav__item">
                            <a href="/#services" className="nav__link" onClick={closeMenu}>Services</a>
                        </li>
                        <li className="nav__item">
                            <a href="/#contact" className="nav__link" onClick={closeMenu}>Contact us</a>
                        </li>
                        <i className={`bx bx-toggle-left change-theme ${darkMode ? '' : 'bx-toggle-right'}`} id="theme-button" onClick={toggleDarkMode} />
                    </ul>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <i className="bx bx-grid-alt"></i>
                </div>
                <a href="/contact" className="button button__header">
                    Contact Us
                </a>
                {/* <button className="button button__header" onClick={() => {
                    navigate('/contact')
                }}>Contact Us</button> */}
            </nav>
        </header>
    );
}

export default NavBar;