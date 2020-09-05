import React, { Component } from 'react';
import authService from '../../services/authService';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  // ...

  render() {
    const state = this.props.location || {};
    const target = state.referrer || '/';

    if (this.state.isAuthenticated) {
      return <Redirect to={target} />;
    }

    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} placeholder="Enter your username." onChange={this.handleUsernameChange} />
          <input type="password" value={this.state.password} placeholder="Enter your password." onChange={this.handlePasswordChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login; 