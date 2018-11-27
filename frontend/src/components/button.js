import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Buttons extends Component {
  handleClick(e) {
  }
  render() {
    return (
      <Button onClick={this.handleClick}>
        {this.props.message}
      </Button>
    );
  }
}

export default Buttons;


