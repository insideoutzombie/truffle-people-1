import React, { Component } from 'react';
import Web3 from 'web3';
import Form from './form.js';
import _ from 'lodash';

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"))
let ABI = require('../../../abi/PeopleABI.js');
let peopleAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
let People = web3.eth.contract(ABI).at(peopleAddress);
web3.eth.defaultAccount = web3.eth.accounts[0];
let balance = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase)).toString();

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstNames: [],
      lastNames: [],
      ages: [],
    }
  }


  render() {



    return(
      <main className="container">
        <Form />
        <p>ETH = {balance}</p>

      </main>
    )
  }
}

export default Home
