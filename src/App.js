import React, { useState, useEffect } from 'react';
import FormWord from './FormWord.js';
import Definitions from "./Definitions.js";
//import logo from './logo.svg';
import './App.css';
console.log('hello');

let App = () => {
  const [definitions, setDefinitions] = useState([])
  useEffect(()=>console.log('hi'))
  const get_defs = function(word) {
    fetch(`http://api.urbandictionary.com/v0/define?term=${word}`)
    .then(data => data.json())
    .then(res => setDefinitions(res.list))
  }


  return (
    <div>
      <FormWord handleclick={get_defs} />
      <Definitions definitions={definitions}/>
    </div>
  )

}

export default App;