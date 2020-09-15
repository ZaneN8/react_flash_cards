import React from "react";

const FlashCard = ({ question, answer }) => {
  return (
    <div>
      <div>{question}</div>
      <div>{answer}</div>
    </div>
  );
};
export default FlashCard;
