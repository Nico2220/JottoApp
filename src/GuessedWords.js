import React from "react";
import PropTypes from "prop-types";

export const GuessedWords = (props) => {
  let content;

  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-instruction">Try to guess the secret word</span>
    );
  } else {
    let guessedWordRows = props.guessedWords.map((item, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{item.guessedWord}</td>
        <td>{item.letterMatchCount}</td>
      </tr>
    ));
    content = (
      <div data-test="guessed-words">
        <h1>Guessed Words</h1>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching letters</th>
            </tr>
          </thead>

          <tbody>{guessedWordRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-word">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
