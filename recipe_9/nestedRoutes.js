import React from 'react';
import { Route } from 'react-router-dom';
import ChildComp from './ChildComp';

/* 
 * Below is the Route Component that is routing to this page
 * i.e. <Route path="/parent" component={ParentComp} />
 * and assuming we have a nested route that will be /parent/child
 * we can build that route within the parent
 * This can take one of 2 patterns
 * 1. do we want to still render the parent as well as the child
 * 2. render only the child
 * Below we are handling the case where we render both parent and child
 */
function ParentComp(props) {
  return (
    <div>
      <h1>This part of the page will be rendered for all levels of /base addresses</h1>
      <h4>
        {/* Other components omitted for clarity */}
      </h4>

      {/* We are setting the path for BaseLevelComp using the props.match.url
				because this Component is rendered at the /base level that what will be passed to path below
				however, unlike the Route defined outside of this Component this one has the exact prop
				and therefore it will only render if we are at the /base address and not any further */}
      <Route path={`${props.match.url}/child`} component={ChildComp} exact />
    </div>
  );
}

export default ParentComp;