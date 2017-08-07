import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about" component={About} />
         </Switch>
      </div>
    );
  }
}

export default App;
