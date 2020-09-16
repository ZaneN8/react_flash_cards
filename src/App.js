import React, { Component } from "react";
import "./App.css";
import { Button, Header, Container } from "semantic-ui-react";
import FlashCards from "./FlashCards";
import FlashCardForm from "./FlashCardForm";

class App extends Component {
  state = {
    flashCardList: [
      { id: 1, question: "5 * 5", answer: "= 25" },
      { id: 2, question: "Question 2", answer: "Answer 2" },
      { id: 3, question: "Question 3", answer: "Answer 3" },
    ],
  };

  handleClick = () => {};

  addFlashCard = (flashCard) => {
    const newFlashCard = { ...flashCard, id: Math.random() };
    this.setState({
      flashCardList: [newFlashCard, ...this.state.flashCardList],
    });
  };

  deleteFlashCard = (id) => {
    const { flashCardList } = this.state;
    const filteredFlashCards = flashCardList.filter(
      (flashCard) => flashCard.id !== id
    );
    this.setState({
      flashCardList: filteredFlashCards,
    });
  };

  render() {
    return (
      <Container>
        <Header as="h1">Flash Cards</Header>
        <hr />

        <FlashCardForm addFlashCardProp={this.addFlashCard} />

        <FlashCards
          flashCardListProp={this.state.flashCardList}
          deleteFlashCardProp={this.deleteFlashCard}
        />
      </Container>
    );
  }
}

export default App;
