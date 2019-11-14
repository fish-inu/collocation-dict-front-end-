import React from "react";

function Definitions(props) {
    let definitions = props.definitions;
    return (<> 
    {
        definitions.length > 0 ? definitions.map(definition => {
            return  (
                <li key={definition.defid}>
                    <div>{definition.word}</div>
                    <div>{definition.definition}</div>
                </li>
            )
            }) : <div></div>
    }
    </>)
    
   
}

export default Definitions;