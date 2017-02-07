// Library Imports
import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

// Component Imports
import App from './containers/App';
import Home from './components/Home';
import About from './components/About';

const router = (
  <Router history={ browserHistory } >
    <Route path='/' component={ App } >
    <IndexRoute component={ Home } />
      <Route path='/about' component={ About } />
    </Route>
  </Router>
);

export default router;
