import React from "react";

function Definitions(props) {
    let definitons = props.definitions;
    if (definitons) {
        const items = definitons.map(definition => {
            return (
                <li key={definition.defid}>
                    <div>{definition.word}</div>
                    <div>{definition.definition}</div>
                </li>
            )
        });
        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
    else
        return (
            <div></div>
         )
}

export default Definitions;