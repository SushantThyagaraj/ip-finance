import React from 'react';
import { Jumbotron} from 'reactstrap';
import { Image, Row, Col,Button,ButtonToolbar} from 'react-bootstrap';


class HomePage extends React.Component {
    clickHandler() {
        const url = 'http://localhost:8080/users/'
        const data = {
            email: 'email',
            password: 'pass'
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data)
        })
        .then(res => {res.json()})
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }

    render () {

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">IP Finance 2018</h1>
                <p className="lead">Making it easier than ever to send crypto from one currency to another.</p>
                      <Button bsStyle="info" onClick={() => {this.clickHandler()}}>Learn More</Button>{'\t'}
                      <Button bsStyle="info" href="/login">
                          <span>Log in</span>
                        </Button>
            </Jumbotron>
        </div>
    );
};
}

export default HomePage;
