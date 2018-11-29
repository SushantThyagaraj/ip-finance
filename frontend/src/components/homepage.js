import React from 'react';
import { Jumbotron} from 'reactstrap';
import { Image, Row, Col, } from 'react-bootstrap';


class HomePage extends React.Component {
    render () {

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">IP Finance 2018</h1>
                <p className="lead">Making it easier than ever to send crypto from one currency to another.</p>
                <p className="lead">
                    <a href="https://docs.google.com/document/u/1/d/12W414aCpnBQ5NyyYDCWU7U95M1xHImnhQNaII2_Pjdg/edit?usp=sharing" class="btn btn-info" role="button">Learn More</a>
                </p>
            </Jumbotron>
        </div>
    );
};
}

export default HomePage;