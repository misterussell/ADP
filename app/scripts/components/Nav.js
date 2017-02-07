import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <nav className="main-nav">
        <img className="logo" src="../../assets/images/logo.png"/>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to='/'>Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-link">
            <Link to="/our-pathologists">Our Pathologists</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact-us">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
});
