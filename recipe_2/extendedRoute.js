import React from 'react';
import { Route } from 'react-router-dom';

function loggingFunction(props) {
  console.log('Route logger: ', props);
}

function LoggingRoute({ component: ComponentToRender, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => {
        loggingFunction(props);
        return <ComponentToRender {...props} />;
      }}>
    </Route>
  );
}

export default LoggingRoute;