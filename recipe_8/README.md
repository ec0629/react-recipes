The following code is invalid JSX because React does not allow you to render adjacent elements.
 
```jsx
return (
  <p>Some Text</p>
  <p>More Text</p>
);
```

But why?  
JSX is just syntactic sugar for calls to React.createElement(), therefore the above
is actually.  

```js
return (
  React.createElement('p')
  React.createElement('p')
);
```

You cannot return multiple expressions in JavaScript. So how can we avoid this?  
3 solutions:

1. Return a list of JSX
	- The problem with this solution is that it requires us to create/include a key for each element.

```jsx
return [
  <p key="item1">Some Text</p>
  <p key="item1">More Text</p>
];
```

2. Create a higher order component that wraps the adjacent elements and just returns children
```jsx
const AdjacentElementWrapper = (props) => props.children;
<AdjacentElementWrapper>
  <p>Some Text</p>
  <p>More Text</p>
</AdjacentElementWrapper>
```

3. Use empty tag wrappers
```jsx
return (
  <>
	<p>Some Text</p>
  	<p>More Text</p>
  </>
);
```