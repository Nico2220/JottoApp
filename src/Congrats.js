import React from "react";

export const Congrats = (props) => {
  return props.success ? (
    <div data-test="component-congrat">
      <span data-test="component-message">You win</span>
    </div>
  ) : (
    <div data-test="component-congrat"></div>
  );
};
