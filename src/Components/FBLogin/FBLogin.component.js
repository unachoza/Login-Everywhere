import React, { Component } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';

export default class FBLogin extends Component {
  handleResponse = (data) => {
    console.log(data);
  };

  handleError = (error) => {
    this.setState({ error });
  };

  render() {
    return (
      <FacebookProvider appId="123456789">
        <LoginButton scope="email" onCompleted={this.handleResponse} onError={this.handleError}>
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
    );
  }
}
