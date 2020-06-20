import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from 'Pages/Homepage/Homepage.page.js';
// import history from './history';
import UserProvider from 'Contexts/UserProvider';
import Profile from 'Pages/Profile/Profile.page.js';
// import MenuBar from './components/menus/MenuBar';
import Footer from 'Components/Footer/Footer.component';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/" component={Footer} />
          <UserProvider>
            <Route exact path="/profile" component={Profile} />
          </UserProvider>
        </Switch>
      </div>
    );
  }
}

export default App;
