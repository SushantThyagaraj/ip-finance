import React, { Component } from 'react';
import Input from './input';
import Buttons from '../components/button';
import { Container, Row, Col } from 'reactstrap';

class Form extends Component{
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Container>
          <Row> 
            <Col><Input label="Initial Coin" placeholder="Enter Coin" /></Col>
            <Col><Input label="Your Public Address" placeholder="Enter your address" /></Col>
          </Row>
          <Row>
            <Col><Input label="Final Coin" placeholder="Enter Coin" /> </Col>
            <Col><Input label="Receiver's Address" placeholder="Enter Receiver's Address" /> </Col>
          </Row>
          <Buttons message="Submit" />
        </Container>

      </div>
    );
  }
}

export default Form;
