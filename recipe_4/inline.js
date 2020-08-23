import React from 'react';

// we use single curly braces to inject and execute a single JavaScript expressions 
// into JSX code these can include function calls and ternary operators as well
export default function Message(props) {
  return <p>{props.message}</p>;
}