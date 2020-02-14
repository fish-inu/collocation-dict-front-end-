import React from "react";
import Unit from "./Unit.js";
import { Card, Icon, Divider, Header, Segment } from "semantic-ui-react";

const get_meta = card => {
  return `${card.meta[0]} | ${card.meta[1]}`;
};
function Definitions(props) {
  let result = props.definitions;
  return (
    <div>
      {result.map(card => (
        <Card centered color="blue">
          <Card.Content>
            <Header as="h2">{get_meta(card)}</Header>
            {card.col.map(seg => (
              <Segment>
                <Card.Meta>{seg[0].meaning ? seg[0].meaning : ""}</Card.Meta>
                {seg.map(unit => (
                  <Unit unit={unit} />
                ))}
              </Segment>
            ))}
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export default Definitions;
