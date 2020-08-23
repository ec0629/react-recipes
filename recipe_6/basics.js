// React Router 4 introduced Dynamic Routing which means routing is handled at runtime and not at app startup
// it walks through routes as they are defined in the components that are being rendered.
// need to install it for a app created using create-react-app

/* import statements for components below */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const contentContainer = {
    marginLeft: '15%',
  };

  return (
    // Whenever we want to declare a route we must wrap the Route component
    // and any of its containers in the Router component
    <Router>
      <div className="App">
        <div>
          <!-- since Routes are just components we can include any number of them and each one will be rendered in the UI -->
          <Route path="/" component={Home} />
          <!-- the path attribute without using the 'exact' attribute along side it is a fuzzy mathcher and will match ANY routes that
 								the declared path from this nesting point forward
					-->
          <Route path="/" component={Home} />
          <!-- both of these will be rendered for /another/path -->
          <Route path="/another/path" component={Home} />
          <Route path="/" component={Home} exact />
          <!-- the above Route will not be rendered for /another/patch since it is now looking for an exact match -->

          <Switch>
            <!-- Wrapping Routes in a Switch means only one Route will be rendered -->
          	<Route path="/" component={Home} />
            <Route path="/another/path" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;