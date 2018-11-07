import React, { Component } from 'react';

class Button extends Component {
  handleClick(e) {
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.message}
      </button>
    );
  }
}

export default Button;
