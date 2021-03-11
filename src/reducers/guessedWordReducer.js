import { actionTypes } from "../actions";

const guessedWords = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESSED_WORD:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default guessedWords;
