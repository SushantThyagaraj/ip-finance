import React, { Component } from 'react';
import Cards from './cards';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';


class CardPage extends Component {
    componentDidMount() {
        if (!localStorage.getItem('token')) {
            return (<Redirect to="/login" />)
        }
    }

    render() {
        return (
        <Container>
            <Row>
                <Col sm = "4"> <Cards title="The Water Project" subtitle="Invest!" text=
                <div>
                  <div>{"Solving the water crisis, one community at a time."}</div>
                  <div><b>{"Public Address:"}</b></div>
                  <div><i>{"1HesYJSP1QqcyPEjnQ9vzBL1wujruNGe7R"}</i></div>
                </div>
                        imgsrc="https://user-content.givegab.com/uploads/group/logo/442333/6ae750a7677cbfea1754e1096fff8d1293be41ab.png"/> </Col>
                <Col sm = "4"> <Cards title="Omni Nano" subtitle="Invest!" text=
                <div>
                  <div>{"Inspiring the next generation of the STEM Workforce."}</div>
                  <div><b>{"Public Address:"}</b></div>
                  <div><i>{"16Sy8mvjyNgCRYS14m1Rtca3UfrFPzz9eJ"}</i></div>
                </div>
                        imgsrc="https://s3.amazonaws.com/media-p.slid.es/logos/392/Omni-Nano-Logo-Nanotechnology-Education-Inspire-NavyOrange-02-square.png"/> </Col>
                <Col sm = "4"> <Cards title="A Special Wish - Chicago" subtitle="Invest!" text=
                <div>
                  <div>{"Help make a child's day."}</div>
                  <div><b>{"Public Address:"}</b></div>
                  <div><i>{"16DEzKc9fX4XfgGzEvQUJmoYeUrbRNXqxe"}</i></div>
                </div>
                        imgsrc="https://pbs.twimg.com/profile_images/1021788368340959232/6KeQ7hxh_400x400.jpg"/> </Col>
            </Row>
        </Container>
        );
    }
}

export default CardPage;
