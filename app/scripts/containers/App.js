// Library Imports
import React from 'react';

// Component Imports
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default React.createClass({
  render() {
    return (
      <div className="all-content">
        <Nav />
        { this.props.children }
        <Footer />
      </div>
    );
  }
});
