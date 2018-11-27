import React, { Component } from 'react';
import './App.css';
import Form from './form/form';
import MainComponent from './components/styles';
import Header from './components/header';
import CardPage from './cardpage/cardpage';
import TransactionPage from './components/transactionpage';

class App extends Component {
  render() {
    return (
      <div style={MainComponent}>
        <main>
          <Header />
          <Form />
          <CardPage />
          <TransactionPage />
        </main>
      </div>
    );
  }
}

export default App;

