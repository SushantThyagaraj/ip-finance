import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class Cards extends Component{
  render() {
    return (
      <div style={{flex: 6}}>
        <Card>
          <CardImg top width="100%" src={this.props.imgsrc} alt="Card image cap" />
          <CardBody>
            <CardTitle> {this.props.title} </CardTitle>
            <CardSubtitle> {this.props.subtitle} </CardSubtitle>
            <CardText> {this.props.text} </CardText>
            <Button>Donate</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}


export default Cards;