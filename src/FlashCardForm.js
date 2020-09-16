import React from "react";
import { Form } from "semantic-ui-react";

class FlashCardForm extends React.Component {
  state = {
    question: "",
    answer: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.setState({
      question: "",
      answer: "",
    });
    this.props.addFlashCardProp(this.state);
  };

  render() {
    const { question, answer } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Add a Question"
            placeholder="Question"
            name="question"
            value={question}
            onChange={this.handleChange}
            required
          />

          <Form.Input
            label="Add an Answer"
            placeholder="Answer"
            name="answer"
            value={answer}
            onChange={this.handleChange}
            required
          />
          <Form.Button color="green">Add</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default FlashCardForm;
