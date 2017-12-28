import React, { Component } from 'react';
import Web3 from 'web3';
import _ from 'lodash';

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"))

export default class Table extends Component{

  render(){
    const TableStyle={
      backgroundColor: "blue",
      color: "white",
      margin: "5px auto",
      border: "5px solid white",
    }
    const CellStyle={
      width: "200px",
      textAlign: "center"
    }

    let TableRows = []

    _.each(this.props.firstNames, (value, index) => {
      TableRows.push(
        <tr key={index} style={CellStyle}>
          <td>{web3.toAscii(this.props.firstNames[index])}</td>
          <td>{web3.toAscii(this.props.lastNames[index])}</td>
          <td>{this.props.ages[index]}</td>
        </tr>
      )
    })

    return(
      <div className="App-table-div">
            <table className="App-table">
              <thead style={TableStyle}>
                <tr>
                  <th style={CellStyle}>First Name</th>
                  <th style={CellStyle}>Last Name</th>
                  <th style={CellStyle}>Age</th>
                </tr>
              </thead>
              <tbody style={TableStyle}>
                {TableRows}
              </tbody>
            </table>
      </div>
    )
  }
}
