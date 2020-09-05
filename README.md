# React Recipes

# Table of Contents
  - [Recipe 1: Page Not Found route](#recipe-1-page-not-found-route)
  - [Recipe 2: Extending a Route to add funcionality on render](#recipe-2-extending-a-route-to-add-funcionality-on-render)
  - [Recipe 3: 3 core methods of styling components](#recipe-3-3-core-methods-of-styling-components)
  - [Recipe 4: using inline JavaScript expressions in JSX](#recipe-4-using-inline-javascript-expressions-in-jsx)
  - [Recipe 5: returning multiline JSX as a single expression](#recipe-5-returning-multiline-jsx-as-a-single-expression)
  - [Recipe 6: understanding the basic components of React Router](#recipe-6-understanding-the-basic-components-of-react-router)
  - [Recipe 7: two ways of passing handlers and methods to React components with dynamic arguments](#recipe-7-two-ways-of-passing-handlers-and-methods-to-react-components-with-dynamic-arguments)
  - [Recipe 8: rendering adjacent components](#recipe-8-rendering-adjacent-components)
  - [Recipe 9: building nested routes](#recipe-9-building-nested-routes)


## Recipe 1: Page Not Found route
Client Side React Router 4, David Starr, Pluralsight, (March 2, 2018)  
- providing a catch-all route that will handle route requests that go unmatched

---

## Recipe 2: Extending a Route to add funcionality on render
Client Side React Router 4, David Starr, Pluralsight, (March 2, 2018)  
- best practices prefer composition compared to inheritance

---

## Recipe 3: 3 core methods of styling components
- the first method uses inline styling rules passed as an object to the style attribute
- the second method uses globally scoped stylesheets
- the third method uses locally scoped stylesheets

---

## Recipe 4: using inline JavaScript expressions in JSX
- the single curly braces allow us to execute a JavaScript expression inline

---

## Recipe 5: returning multiline JSX as a single expression
- like JavaScript we can extend expressions over multiple lines using parentheses

---

## Recipe 6: understanding the basic components of React Router
- includes discussion regarding 3 common props passed to all components rendered using
the React Router framework

---

## Recipe 7: two ways of passing handlers and methods to React components with dynamic arguments
- especially when rendering a list of components we may need to pass additional arguments to
handlers beyond the event object
- this can be accomplished either using a closure or the bind function method

---

## Recipe 8: rendering adjacent components
- because a return statement can only accept a single JavaScript expression and each component
represents a function call to React.render we cannot simply place components adjacent to one another

---

## Recipe 9: building nested routes
- leveraging the declarative nature of the framework to handle nested routes

---

## Recipe 10: extending the Route component to handle protected routes
- basic example of a route requiring authentication