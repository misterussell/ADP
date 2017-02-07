// Library Imports
import React from 'react';

// Component Imports
import About from './About';

export default React.createClass({
  render() {
    return (
      <div className="homepage">
        <img className="hero-image" src='../../assets/images/city-splash.jpg' />
        <h2 className="hero-text">"International diagnostic services by American pathologists using whole slide imaging."</h2>
        <About />
      </div>
    );
  }
});
