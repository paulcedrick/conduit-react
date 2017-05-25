import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './containers/Header/';
import Footer from './containers/Footer/';
import Homepage from './containers/Homepage/';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
