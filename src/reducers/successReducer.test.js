import { actionTypes } from "../actions/index";
import { successReducer } from "./successReducer";

test("Return inital state of 'false' when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("return state of 'true' upon receiving a action", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
