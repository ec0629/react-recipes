import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../../services/authService';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => {
        return authService.isAuthenticated()
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { referrer: props.location.pathname } }} />;
      }}>
    </Route>
  );
}

export default PrivateRoute;