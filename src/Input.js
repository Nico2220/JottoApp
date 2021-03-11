import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";
class Input extends Component {
  render() {
    let content;
    if (this.props.success) {
      content = null;
    } else {
      content = (
        <form>
          <input data-test="input-box" type="text" placeholder="Enter guess" />
          <button type="submit" data-test="submit-button">
            Submit
          </button>
        </form>
      );
    }

    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToprops = ({ success }) => {
  return {
    success,
  };
};

export default connect(mapStateToprops, { guessWord })(Input);
