import React, { Component } from 'react';
import Web3 from 'web3';
import Form from './form.js';


let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"))
let ABI = require('../../../abi/PeopleABI.js');
let peopleAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
let People = web3.eth.contract(ABI).at(peopleAddress);


class Home extends Component {
  render() {
    return(
      <main className="container">
        <Form />

      </main>
    )
  }
}

export default Home
