import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/sneakers.png';
import searchIcon from '../assets/search.png';

const Navbar = () => {
  return (
    <nav>
      <div className="navTop" id="navbar">
        <div className="navItem">
          <img src={logo} alt="website logo" />
        </div>
        <div className="navItem">
          <div className="search">
            <input type="text" placeholder="Search..." className="searchInput" />
            <img src={searchIcon} width="20px" height="20px" alt="Search Icon" className="searchIcon" />
          </div>
        </div>
        <div className="navItem">
          <span className="limitedOffer">Limited Time Offer</span>
        </div>
      </div>
      <div className="navBottom">
        <h3 className="menuItem">AIR FORCE</h3>
        <h3 className="menuItem">JORDAN</h3>
        <h3 className="menuItem">BLAZER</h3>
        <h3 className="menuItem">CARTER</h3>
        <h3 className="menuItem">HIPPIE</h3>
      </div>
    </nav>
  );
};

export default Navbar;