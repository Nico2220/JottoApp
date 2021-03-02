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
    test("renders component without Error", () => {});

    test("renders the input box", () => {});

    test("renders the submit button", () => {});
  });

  describe("Word has  been guessed", () => {
    test("renders component without Error", () => {});

    test("Does not render the input box", () => {});

    test("Does not render the submit button", () => {});
  });
});
