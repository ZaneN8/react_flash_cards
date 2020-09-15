import React from "react";
import FlashCard from "./FlashCard";
import { Table } from "semantic-ui-react";

const FlashCards = ({ flashCardListProp }) => {
  return (
    <div>
      {flashCardListProp.map((list) => {
        return <FlashCard key={list.id} {...list} />;
      })}
    </div>
  );
};

export default FlashCards;
