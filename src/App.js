import React from 'react';
//import logo from './logo.svg';
import './App.css';
console.log('hello');

let App = function() {
    return <Toolbar theme="dark" />;
}

let Toolbar = function(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

let ThemedButton = function(props)  {
    return <div>{props.theme}</div>;
}

export default App;
