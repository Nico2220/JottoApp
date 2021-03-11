import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../tests/testsUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe("Render", () => {
  describe("Word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders component without Error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("renders the input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    test("renders the submit button", () => {
      const sumbmitButton = findByTestAttr(wrapper, "submit-button");
      expect(sumbmitButton.length).toBe(1);
    });
  });

  describe("Word has  been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders component without Error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("Does not render the input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });

    test("Does not render the submit button", () => {
      const sumbmitButton = findByTestAttr(wrapper, "submit-button");
      expect(sumbmitButton.length).toBe(0);
    });
  });
});

describe("Redux props", () => {
  test("has success pice of state", () => {
    const success = true;

    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;

    expect(successProps).toBe(success);
  });

  test("`guessWord` action creator is function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
