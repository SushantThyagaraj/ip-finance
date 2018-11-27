import React, { Component } from 'react';
import Cards from './cards';
import { Container, Row, Col } from 'reactstrap';


class CardPage extends Component {
    render() {
        return (
        <Container>
            <Row>
                <Col> <Cards title="Charity #1" subtitle="Donate to us!" text="The power to change lives." 
                        imgsrc="http://apparelmagazine.co.nz/supermarketnews/wp-content/uploads/sites/2/2015/10/Heart-Foundation-Tick1-e1443646351972-330x330.png"/> </Col>
                <Col> <Cards title="Charity #2" subtitle="Donate to us!" text="The power to change lives." 
                        imgsrc="https://mountainx.com/wp-content/uploads/2017/12/DonationButton-330x330.png"/> </Col>
                <Col> <Cards title="Charity #3" subtitle="Donate to us!" text="The power to change lives." 
                        imgsrc="https://www.independencegolfclub.com/_filelib/ImageGallery/2017_Events/Quill_Cup_2017/18341853_436752563343398_4938901093434678900_n.330x330.jpg"/> </Col>
            </Row>
        </Container>
        );
    }
}

export default CardPage;