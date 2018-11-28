import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Button, Fade } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


class InfoInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            formValues: {}
        };
    }

    handleChange(e) {
        e.preventDefault();
        let formValues = this.state.formValues;
        let name = e.target.name;
        let value = e.target.value;

        formValues[name] = value;

        this.setState({ formValues })    
    }

    handleClick(e) {
        e.preventDefault();
        alert(this.state.formValues.initialcoin + " is being sent from " + this.state.formValues.initialaddress + " to " + this.state.formValues.receiversaddress + " in " + this.state.formValues.finalcoin);
    }

    // https://stackoverflow.com/questions/41030025/react-updating-state-in-two-input-fields-from-form-submission

    render() {
        return (
        <div>
            <form>
                <Container>
                    <Row>
                        <Col>
                            <FormGroup
                                controlId="formBasicText">
                                <ControlLabel>Intial Coin</ControlLabel>
                                <FormControl
                                    name="initialcoin"
                                    type="text"
                                    value={this.state.formValues["initialcoin"]}
                                    placeholder="Enter Coin"
                                    onChange={this.handleChange} />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup
                            controlId="formBasicText">
                            <ControlLabel>Your Public Address</ControlLabel>
                            <FormControl
                                name="initialaddress"
                                type="text"
                                value={this.state.formValues["initialaddress"]}
                                placeholder="Enter Address"
                                onChange={this.handleChange} />
                            <FormControl.Feedback />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup
                                controlId="formBasicText">
                                <ControlLabel>Final Coin</ControlLabel>
                                <FormControl
                                    name="finalcoin"
                                    type="text"
                                    value={this.state.formValues["finalcoin"]}
                                    placeholder="Enter Coin"
                                    onChange={this.handleChange} />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup
                                controlId="formBasicText">
                                <ControlLabel>Receiver's Address</ControlLabel>
                                <FormControl
                                    name="receiversaddress"
                                    type="text"
                                    value={this.state.formValues["receiversaddress"]}
                                    placeholder="Enter Address"
                                    onChange={this.handleChange} />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Col>
                    </Row>
                        <Row><Col><Button onClick={this.handleClick}> Submit </Button></Col></Row>
                    

                </Container>

            </form>
        </div>
        );
    }
}

export default InfoInput;
