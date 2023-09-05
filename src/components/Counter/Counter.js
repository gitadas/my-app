import React, { Component } from "react";

const EnhancedComponent = OriginalComponent => {
  class NewComponent extends Component {
    state = { count: 0 };
    incrementCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
}
return NewComponent;
};

export default EnhancedComponent;    