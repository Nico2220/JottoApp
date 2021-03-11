import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { GuessedWords } from "./GuessedWords";

import { Congrats } from "./Congrats";
import { guessWord, getSecretWord } from "./actions";
import Input from "./Input";

export class UnconnectedApp extends React.Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  const { success, guessedWords, secretWord } = state;
  return {
    success,
    guessedWords,
    secretWord,
  };
};

export default connect(mapStateToprops, { guessWord, getSecretWord })(
  UnconnectedApp
);
