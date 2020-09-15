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

  render() {
    return (
      <Container>
        <Header>Flash Cards</Header>
        <FlashCards flashCardListProp={this.state.flashCardList} />
      </Container>
    );
  }
}

export default App;
