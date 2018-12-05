import React from 'react';
import { Jumbotron} from 'reactstrap';
import { Image, Row, Col, } from 'react-bootstrap';


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
                <p className="lead">
                    <button onClick={() => {this.clickHandler()}}>Learn More</button>
                  <p className="lead" >
                      <span class = "btn btn-outline-success">
                        <img alt class = "civic-icon btn-magic-login-icon btn-magic-login-icon-svg" src = "https://tokenmarket.net/tokenmarket-static/perma-asset/civic-icon-green.ca7fd772a24afe86727a14ff1390b265.png"/>
                        <span>&nbsp;&nbsp;&nbsp;Log in with Civic</span>
                      </span>
                  </p>
                </p>
            </Jumbotron>
        </div>
    );
};
}

export default HomePage;
