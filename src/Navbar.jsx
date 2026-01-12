import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

