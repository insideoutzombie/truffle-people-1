import React, { Component } from 'react';
import Web3 from 'web3';
import Form from './form.js';
import _ from 'lodash';
import Table from './table.js';
import agGrid from './Ag-table.js'

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"))
let ABI = require('../../../abi/PeopleABI.js');
let peopleAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
let People = web3.eth.contract(ABI).at(peopleAddress);
web3.eth.defaultAccount = web3.eth.accounts[0];
let balance;

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstNames: [],
      lastNames: [],
      ages: [],
    }
    this.getPeople = this.getPeople.bind(this);
    this.getBalance = this.getBalance.bind(this);
  }

  getPeople = () => {
    var data = People.getPeople();
    this.setState({
      firstNames: String(data[0]).split(','),
      lastNames: String(data[1]).split(','),
      ages: String(data[2]).split(',')
    });
  }

  getBalance = () => {
    balance = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase)).toString();
  }

  componentWillMount() {
    this.getPeople();
    this.getBalance();
  }

  render() {
    const MainStyle={
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "blue",
      color: "black",
      margin: "5px auto",
      border: "5px solid white",
    }
    const BalanceStyle={
      color: "white"
    }

    return(
      <main className="container" style={MainStyle}>
        <Form getPeople={this.getPeople} getBalance={this.getBalance}/>
        <p style={BalanceStyle}>ETH = {balance}</p>
        <Table key={1} firstNames={this.state.firstNames} lastNames={this.state.lastNames} ages={this.state.ages} />
        <agGrid />
      </main>
    )
  }
}

export default Home
