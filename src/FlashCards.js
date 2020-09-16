import React from "react";
import FlashCard from "./FlashCard";

const FlashCards = ({ flashCardListProp, deleteFlashCardProp }) => {
  const renderFlashCards = () => {
    return flashCardListProp.map((list) => {
      return <FlashCard key={list.id} {...list} xx={deleteFlashCardProp} />;
    });
  };

  return <div>{renderFlashCards()}</div>;
};

export default FlashCards;
