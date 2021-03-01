import React from "react";
import PropTypes, { array } from "prop-types";

export const GuessWord = (props) => {
  let content;
  if (props.guessedWord.length === 0) {
    content = (
      <span data-test="guess-instruction">Try to guess the secret word</span>
    );
  }
  return <div data-test="component-guessed-word">{content}</div>;
};

GuessWord.propTypes = {
  guessedWord: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
