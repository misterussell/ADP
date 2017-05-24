// Library Imports
import React from 'react';

// Component Imports
import About from './About';

export default React.createClass({
  render() {
    return (
      <div className="homepage">
        <h1>Insert Hero Image Here</h1>
        <h2 className="hero-text">"International diagnostic services by American pathologists using whole slide imaging."</h2>
        <About />
      </div>
    );
  }
});

// <img className="hero-image" src='../../assets/images/city-splash.jpg' />
