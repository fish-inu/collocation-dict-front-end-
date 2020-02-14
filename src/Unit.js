import React from "react";
import { Card, Divider } from "semantic-ui-react";

function Unit({ unit }) {
  return (
    <Card.Content>
      <Card.Meta>
        <i>{unit.pos}</i>
      </Card.Meta>

      {unit.collocations.map(coll => (
        <Card.Description>
          <b>{coll}</b>
        </Card.Description>
      ))}
      
      {unit.examples.map(example => (
        <Card.Content extra>{example}</Card.Content>
      ))}

      <Divider horizontal>NEXT</Divider>
    </Card.Content>
  );
}

export default Unit;
