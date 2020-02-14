import React, { useState } from "react";
import { Button, Input, Grid } from "semantic-ui-react";

function FormWord(props) {
  let [query, setQuery] = useState("");

  return (
    <Grid centered relaxed columns={2}>
      <Grid.Column width={2}>
        <Input
          type="text"
          placeholder="type something"
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
      </Grid.Column>
      <Grid.Column width={1}>
        <Button primary onClick={() => props.handleclick(query)}>
          search
        </Button>
      </Grid.Column>
    </Grid>
  );
}

export default FormWord;
