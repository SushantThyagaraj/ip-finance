import React, { Component } from 'react';
import Cards from './cards';
import { Container, Row, Col } from 'reactstrap';


class CardPage extends Component {
    render() {
        return (
        <Container>
            <Row>
                <Col> <Cards title="title" subtitle="subtitle" text="text" 
                        imgsrc="https://www.spellbrand.com/images/blog/images/wwf-logo-design-trend.jpg"/> </Col>
                <Col> <Cards title="title" subtitle="subtitle" text="text" 
                        imgsrc="https://www.spellbrand.com/images/blog/images/wwf-logo-design-trend.jpg"/> </Col>
                <Col> <Cards title="title" subtitle="subtitle" text="text" 
                        imgsrc="https://www.spellbrand.com/images/blog/images/wwf-logo-design-trend.jpg"/> </Col>
            </Row>
 
            <Row>
                <Col> <Cards title="title" subtitle="subtitle" text="text" 
                        imgsrc="https://www.spellbrand.com/images/blog/images/wwf-logo-design-trend.jpg"/> </Col>
                <Col> <Cards title="title" subtitle="subtitle" text="text" 
                        imgsrc="https://www.spellbrand.com/images/blog/images/wwf-logo-design-trend.jpg"/> </Col>
                <Col> <Cards title="title" subtitle="subtitle" text="text" 
                        imgsrc="https://www.spellbrand.com/images/blog/images/wwf-logo-design-trend.jpg"/> </Col>
            </Row>
        </Container>
        );
    }
}

export default CardPage;