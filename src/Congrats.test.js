import { shallow } from "enzyme";
import { Congrats } from "./Congrats";
import { findByTestAttr, checkProps } from "../tests/testsUtils";

const setup = (props = {}) => shallow(<Congrats {...props} />);

test("Render  without Error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrat");
  expect(component.length).toBe(1);
});

test("Render no test when props is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrat");
  expect(component.text()).toBe("");
});

test("render no-empty congrats when props is true", () => {
  const wrapper = setup({ success: true });
  const componentMessage = findByTestAttr(wrapper, "component-message");
  expect(componentMessage.length).not.toBe(0);
});

test("does not throw wrror with expect props", () => {
  const expectProps = { success: false };
  checkProps(Congrats, expectProps);
});
