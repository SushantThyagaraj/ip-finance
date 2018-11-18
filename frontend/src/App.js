import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import Info from './components/info';
import Form from './components/form';
import MainComponent from './components/styles';
import Input from './components/input';
import Header from './components/header';



class App extends Component {
  render() {
    return (
      <div style = {MainComponent}>
        <main>
          <Header />
          <Form />
          <p> Please send your {Info.coin} to {Info.ourPublicAddress}. </p>
          <p> Your {Info.ogCoinValue} {Info.coin} will be transformed to approximately {Info.otherCoinValue} {Info.otherCoin} </p>

          <p><strong> Note that in this preliminary outline of the website,
          <li>Initial coin represents the coin that the user wants to send</li>
          <li>Final coin represents the coin that the receiver wants </li>
          </strong></p>
        </main>
      </div>
    );
  }
}



export default App;
