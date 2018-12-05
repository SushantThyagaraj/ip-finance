import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Container, Row, Col } from 'reactstrap';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const user_info = {
      email: this.state.email,
      password: this.state.password
    }
    fetch(
      "http://localhost:8080/users/login",
      {
        method: 'POST',
        body: JSON.stringify(user_info),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data.email)
      })
      .catch(err => console.error('Caught error: ', err))
  }
  render() {
    return (
      <div className="Login">
      <Container>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        </Container>
      </div>
    );
  }
}