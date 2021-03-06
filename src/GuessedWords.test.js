import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../tests/testsUtils";
import { GuessedWords } from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3,
    },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("Does not throw warning with expected proptypes", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no word guessed", () => {
  let wrapper;
  beforeEach(() => (wrapper = setup({ guessedWords: [] })));

  test("Renders without Error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
  });

  test("Renders intruction to a word", () => {
    const instruction = findByTestAttr(wrapper, "guess-instruction");
    expect(instruction.text().length).not.toBe(0);
  });
});

describe("if there are word guessed", () => {
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 3 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  let wrapper;
  beforeEach(() => (wrapper = setup({ guessedWords })));

  test("Renders without Error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
  });

  test("Render 'guessed word' section", () => {
    const guessedWordNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordNode.length).toBe(1);
  });

  test("correct number of guess word", () => {
    const guessedWordNode = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNode.length).toBe(guessedWords.length);
  });
});
