import checkPropTypes from "check-prop-types";
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
