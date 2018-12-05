import React from 'react';
import { Table } from 'reactstrap';
import { Redirect } from 'react-router-dom';



export default class Example extends React.Component {
    componentDidMount() {
        if (localStorage.getItem('token')) {
            return (<Redirect to="/" />)
        }
    }

    render() {
        let now = new Date()

        return (
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Original Amount</th>
                        <th>Receiving Address</th>
                        <th>Amount Sent</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">07-12-2018</th>
                        <td>0.38520483 BTC</td>
                        <td>0x32be343b94f860124dc4fee278fdcbd38c102d88</td>
                        <td>0.12649283 ETH</td>
                        <td>0.00000001 BTC</td>
                    </tr>
                    <tr>
                        <th scope="row">07-13-2018</th>
                        <td>0.38520483 BTC</td>
                        <td>0x32be343b94f860124dc4fee278fdcbd38c102d88</td>
                        <td>0.12649283 ETH</td>
                        <td>0.00000001 BTC</td>
                    </tr>
                    <tr>
                        <th scope="row">07-14-2018</th>
                        <td>0.38520483 BTC</td>
                        <td>0x32be343b94f860124dc4fee278fdcbd38c102d88</td>
                        <td>0.12649283 ETH</td>
                        <td>0.00000001 BTC</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
