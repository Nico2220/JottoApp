import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Congrats } from "./Congrats";
import { findByTestAttr } from "../tests/testsUtils";

Enzyme.configure({ adapter: new Adapter() });

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
