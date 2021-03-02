import { correctGuess, actionTypes } from "./index";

describe("Correct guess", () => {
  test("return a action with the type 'CORRECT_GUESS'", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
