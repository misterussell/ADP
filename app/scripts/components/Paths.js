// Library Imports
import React from 'react';

// Component Imports
import SinglePath from './SinglePath';

// Data Imports
import data from '../data';

export default React.createClass({
  render() {
    let pathList = data.map((path, i) => {
      return <SinglePath key={ i } pathologist={ path } />;
    });
    return (
      <ul className="pathologists">
        <h1>Our Pathologists</h1>
        { pathList }
      </ul>
    );
  }
});
