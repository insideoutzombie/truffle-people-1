import React, { Component } from 'react';
import Web3 from 'web3';

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"))
let ABI = require('../../../abi/PeopleABI.js');
let peopleAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
let People = web3.eth.contract(ABI).at(peopleAddress);
// let addPersonInstance = '';
web3.eth.defaultAccount = web3.eth.accounts[0];
// defaultAccount = web3.eth.defaultAccount;

class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      age: '',
    }
    this.handleTextChange=this.handleTextChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleTextChange = (event) => {
    event.preventDefault();
    if (this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }
  handleSubmit = (event) => {
    var payload1 = web3.fromAscii(this.state.firstName,32);
    var payload2 = web3.fromAscii(this.state.lastName,32);
    var payload3 = web3.toBigNumber(this.state.age);
    People.addPerson(payload1, payload2, payload3, {from: web3.eth.accounts[0], gas: 3000000})
    this.setState({
      firstName: '',
      lastName: '',
      age: '',
    });
    this.props.getPeople();
    this.props.getBalance();
  }

  render() {
    const formStyle = {
      "backgroundColor": "deepskyblue",
      "flexGrow": 1,
    };
    return (
      <div className="form" style={formStyle}>
        <form>
          <label>
            First Name:
            <input id="firstName" onChange={this.handleTextChange} type="text" value={this.state.firstName}/>
          </label>
          <hr/>
          <label>
            Last Name:
            <input id="lastName" onChange={this.handleTextChange} type="text" value={this.state.lastName}/>
          </label>
          <hr />
          <label>
            Age:
            <input id="age" onChange={this.handleTextChange} type="text" value={this.state.age}/>
          </label>
          <hr />
          <input id="submit" type="button" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default Form;
