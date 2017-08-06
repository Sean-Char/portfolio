import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import Professional from '../components/Professional/Professional';
import Experience from '../components/Experience/Experience';
import Portfolio from '../components/Portfolio/Portfolio';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/professional" component={Professional} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/portfolio" component={Portfolio} />
         </Switch>
      </div>
    );
  }
}

export default App;
