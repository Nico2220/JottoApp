import React from "react";
import PropTypes from "prop-types";

export const Congrats = (props) => {
  return props.success ? (
    <div data-test="component-congrat">
      <span data-test="component-message">You win</span>
    </div>
  ) : (
    <div data-test="component-congrat"></div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool,
};
