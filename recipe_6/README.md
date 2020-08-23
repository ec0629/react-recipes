[React Router Docs](https://reacttraining.com/react-router/web/api/match)

Every render method associate with the Route component (component, render, children)
component of React Router 4 will receive 3 properties regarding navigation:

1. props.match  
   - params
	- isExact (boolean if the path matched exactly)
	- path (coincides with what path prop was for the matching Route)
	- url (string form of the matched portion of the url)

2. props.location
	- JSON object with properties outlining specifics of the current navigation state

3. props.history
	- an object used for programmatic manipulation of the navigation history
  
***When using component property to render a component these are passed by default
when using a function to render a component the function will be passed these properties
and then they must be set as props OR you can wrap the export function of the component
you are rendering in withRouter from react-router-dom***

```jsx
import {withRouter} from 'react-router-dom';

// ...

export default withRouter(ColorSwatch);
// OR
<Route path="/color" render={({match}) => (
    	<ColorSwatch color="#ff0000" text="Red" match={match} />
    )} />
```