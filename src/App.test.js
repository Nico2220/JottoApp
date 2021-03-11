import React from "react";
import App, { UnconnectedApp } from "./App";
import { shallow } from "enzyme";
import { storeFactory } from "../tests/testsUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Redux props", () => {
  test("has access to `success state`", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("has  access to `guessedWords state`", () => {
    const guessedWords = [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "agile", letterMatchCount: 3 },
    ];

    const wrapper = setup({ guessedWords });
    const guessedWordsPorp = wrapper.instance().props.guessedWords;

    expect(guessedWordsPorp).toEqual(guessedWords);
  });

  test("has access to `secretWord state`", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test("`guessWord` action creator is a function props", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });

  test("`getSecretWord` action creator is a function props", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });

  test("`getSecretWord` run on App mount", () => {
    //mock function
    const getSecretWordMock = jest.fn();

    const props = {
      getSecretWord: getSecretWordMock,
      success: false,
      guessedWords: [],
    };

    //set up App component with getSecretWordMock as the getScretWord props
    const wrapper = shallow(<UnconnectedApp {...props} />);

    //run lifecycle methode
    wrapper.instance().componentDidMount();

    //check to see if mock run
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
  });
});
