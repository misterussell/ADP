// Library Imports
import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

// Component Imports
import App from './containers/App';
import Home from './components/Home';
import About from './components/About';
import Paths from './components/Paths';
import Contact from './components/contact';

const router = (
  <Router history={ browserHistory } >
    <Route path='/' component={ App } >
    <IndexRoute component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/our-pathologists' component={ Paths } />
      <Route path='/contact-us' component={ Contact } />
    </Route>
  </Router>
);

export default router;
