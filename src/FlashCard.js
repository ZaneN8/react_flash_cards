import React from "react";
import { Button, Reveal } from "semantic-ui-react";
import "./App.css";

const FlashCard = ({ question, answer, xx, id }) => {
  return (
    <Reveal animated="move" class="blurred">
      <Reveal.Content>
        <div>{question}</div>
      </Reveal.Content>
      <br />
      <Reveal.Content visible>
        <div style={{ backgroundColor: "black" }}>{answer}</div>
      </Reveal.Content>
      <Reveal.Content hidden>
        <div>{answer}</div>
      </Reveal.Content>
      <br />
      <Button onClick={() => xx(id)} color="red">
        Delete
      </Button>
    </Reveal>
  );

  return (
    <div>
      <div>{question}</div>
      <div>{answer}</div>
      <Button onClick={() => xx(id)} color="red">
        Delete
      </Button>
    </div>
  );
};

export default FlashCard;
