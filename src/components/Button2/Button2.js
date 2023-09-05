import React, { Component } from "react";
import EnhancedComponent from "../Counter/Counter.js";

export class Button2 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button
          onClick={incrementCount}
        >
          Button 2 Clicked {count} times
        </button>
      </div>
    );
  }
}

export default EnhancedComponent(Button2);