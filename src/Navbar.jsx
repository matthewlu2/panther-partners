import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/home" className="logo">
            {/* <img src="src/assets/pantherpartners.png" alt="panther partners"/> */}
            Panther Partners
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="/contact">Contact Us</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
      </nav>
      <div className={`off-screen-menu ${isOpen ? 'off-screen-menu-open' : ''}`}>
        <div className='close-tab' onClick={toggleMenu}>
          <span className="close-bar"></span>
        </div>
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

