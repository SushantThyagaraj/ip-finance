import React, { Component } from 'react';
import Info from './info';
import Input from './input';
import Button from './button';
import { Container, Row, Col } from 'reactstrap';

class Form extends Component{
  render() {
    return (
        <Container>
          <Row> 
            <Col xs="6"><Input label="Initial Coin" placeholder="Enter Address" /></Col>
            <Col xs="6"><Input label="Your Public Address" placeholder="Enter your address" /></Col>
          </Row>
          <Row>
            <Col xs="6"><Input label="Final Coin" placeholder="Enter Coin" /> </Col>
            <Col xs="6"><Input label="Receiver's Address" placeholder="Enter Receiver's Address" /> </Col>
          </Row>
          <Button message="Submit" />
        </Container>
    );
  }
}

export default Form;
