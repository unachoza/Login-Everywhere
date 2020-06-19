import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'Pages/HomePage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
