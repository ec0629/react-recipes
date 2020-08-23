import React from 'react';
import { Router, Route } from 'react-router-dom';
// ...

// Omitting the path property acts as a catch-all for routes at a given level
return (
  <Router>
    <div className="App">
      <Header />
      <Sidebar />
      <div style={contentContainer}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/prompt" component={NameForm} />
          <Route path="/props" component={PropViewer} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);