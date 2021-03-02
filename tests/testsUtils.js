import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import rootReducer from "../src/reducers";

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, expectedProps) => {
  const propsErrpr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  expect(propsErrpr).toBeUndefined();
};
