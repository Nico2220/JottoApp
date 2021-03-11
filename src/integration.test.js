import { storeFactory } from "../tests/testsUtils";
import { guessWord } from "./actions/";

const secretWord = "party";
const unsuccessfulGuess = "train";

describe("guessWord word action dispatcher", () => {
  describe("No guess word", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("Update State correctly for unsuccess guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expetedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      expect(newState).toEqual(expetedState);
    });

    test("Update State for success guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
  });
});

describe("some guessed word", () => {
  const guessedWords = [
    {
      guessedWord: "agile",
      letterMatchCounter: 1,
    },
  ];
  const initialState = { guessedWords, secretWord };
  let store;

  beforeEach(() => (store = storeFactory(initialState)));
  test("Update State correctly for unsuccess guess", () => {
    store.dispatch(guessWord(unsuccessfulGuess));
    const newState = store.getState();
    const expectedState = {
      secretWord,
      success: false,
      guessedWords: [
        ...guessedWords,
        { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
      ],
    };

    expect(newState).toEqual(expectedState);
  });

  test("Update State for success guess", () => {
    store.dispatch(guessWord(secretWord));
    const newState = store.getState();
    const expectedState = {
      secretWord,
      success: true,
      guessedWords: [
        ...guessedWords,
        {
          guessedWord: secretWord,
          letterMatchCount: 5,
        },
      ],
    };
    expect(newState).toEqual(expectedState);
  });
});
