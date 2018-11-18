import React, { Component } from 'react';


class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  // Set userInput to whatever text is in input
  handleUserInput(e) {
    this.setState({userInput: e.target.value})
  };

  render() {
    return (
      <div>
        <input  type="text"
                onChange={this.handleUserInput}
                value = {this.state.userInput}/>
        <p>{this.props.message} </p>
      </div>
    );
  }
}

export default Input;
