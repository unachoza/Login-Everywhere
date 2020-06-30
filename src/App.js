import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from 'Pages/Homepage/Homepage.page.js';
import UserProvider from 'Contexts/UserProvider';
import Profile from 'Pages/Profile/Profile.page.js';
import Error from 'Pages/Error/Error.page.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <UserProvider>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/error" component={Error} />
          </UserProvider>
        </Switch>
      </div>
    );
  }
}

export default App;
