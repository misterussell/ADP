// Library Imports
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <footer className="default-footer">
        <div className="contact-footer">
          <h4 className="contact-title">Contact Us</h4>
          <div className="address">
            <span className="line-break">319 Hidden Creek Circle</span>
            <span className="line-break">Spartanburg, South Carolina</span>
            <span className="line-break">29306 United States</span>
            <span className="line-break">704.286.6494</span>
          </div>
        </div>
        <div className="footer-links">
          <a href="#">^ Go to top of page ^</a>
        </div>
      </footer>
    );
  }
});

// <ul className="quick-links">
//   <li><Link to='/about'>About</Link></li>
//   <li><Link to='/our-pathologists'>Our Pathologists</Link></li>
//   <li><Link to='/contact-us'>Contact Us</Link></li>
// </ul>
