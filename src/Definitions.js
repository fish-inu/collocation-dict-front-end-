import React from "react";

function Definitions(props) {
    let definitions = props.definitions;
    let error_m = 'what?'
    return (<> 
    {
        definitions.length >= 1 ? definitions.map(definition => {
            return  (
                <li key={definition.defid}>
                    <div>{definition.word}</div>
                    <div>{definition.definition}</div>
                </li>
            )
            }) : <div>{error_m}</div>
    }
    </>)
    
   
}

export default Definitions;