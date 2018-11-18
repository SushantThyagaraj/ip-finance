import React, { Component } from 'react';
import Info from './info';
import Input from './input';
import Button from './button';

class Form extends Component{
  render() {
    return (
      <form>
          <label>
          Initial Coin
          <Input />
        </label>
        <label>
          Final Coin
          <Input />
        </label>
        <label>
          Your public address in {Info.coin}
          <Input />
        </label>
        <label>
          Receiver's public address in {Info.otherCoin}
          <Input />
        </label>
        <Button message="Submit"/>
      </form>
    );
  }
}

export default Form;
