import React from "react";
import { Button } from "semantic-ui-react";

const FlashCard = ({ question, answer, xx, id }) => {
  return (
    <div>
      <div>{question}</div>
      <div>{answer}</div>
      <Button onClick={() => xx(id)} color="red">
        Delete
      </Button>
    </div>
  );
  // return (
  //   <Reveal animated="move">
  //     <Reveal.Content visible>{question}</Reveal.Content>
  //     <Reveal.Content hidden>{answer}</Reveal.Content>
  //   </Reveal>
  // );
};
export default FlashCard;
