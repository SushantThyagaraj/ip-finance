import React, { Component } from 'react';
import { Button } from 'reactstrap';

class newButton extends Component {
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

export default newButton;


