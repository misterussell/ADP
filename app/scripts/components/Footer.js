// Library Imports
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <footer className="default-footer">
        <div className="contact-footer">
          <h4>Contact Us</h4>
          <div className="address">
            319 Hidden Creek Circle
            Spartanburg, South Carolina
            29306 United States
            704.286.6494
          </div>
        </div>
        <div className="footer-links">
          <h4>Contact Us</h4>
          <ul className="quick-links">
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/our-pathologists'>Our Pathologists</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
          </ul>
        </div>
      </footer>
    );
  }
});
