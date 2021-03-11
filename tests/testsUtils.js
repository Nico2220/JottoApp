import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleWare(rootReducer, initialState);
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
