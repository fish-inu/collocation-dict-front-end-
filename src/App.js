import React, { useState, useEffect } from "react";
import FormWord from "./FormWord.js";
import Definitions from "./Definitions.js";
import "./App.css";
import logo from './col-logo.png'
import {Image} from 'semantic-ui-react'
console.log("hello");

let App = () => {
  const [definitions, setDefinitions] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    console.log('hi');
  });

  const get_defs = function(word) {
    setSpinner(true);
    fetch(`http://localhost:4000/search/${word}`)
      .then(data => data.json())
      .then(res => {
        setDefinitions(res);
        setSpinner(false);
      });
  };

  return (
    <div>
      <Image src={logo} centered />
      <FormWord handleclick={get_defs} />
      { spinner && <div>loading...</div>}
      <Definitions definitions={definitions}/>
    </div>
  );
};

export default App;
