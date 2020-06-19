import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from 'Pages/Homepage/Homepage.page.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
