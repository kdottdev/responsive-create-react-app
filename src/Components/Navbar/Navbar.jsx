import React, { useState } from 'react';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className="navbar">
      <h2>My App</h2>
      <nav className={mobileNavOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="hamburger" onClick={toggleMobileNav}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </header>
  );
};

export default Navbar;
