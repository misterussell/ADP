// Library Imports
import React from 'react';

// Component Imports
import Nav from '../components/Nav';

export default React.createClass({
  render() {
    return (
      <div className="all-content">
        <Nav />
        { this.props.children }
      </div>
    );
  }
});
