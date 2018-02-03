import React, { Component } from 'react';
import Web3 from 'web3';
import _ from 'lodash';

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"))

export default class CssTable extends Component{

  render(){
    const TableStyle={

    }
    const CellStyle={
      color: 'black',
      animationName: 'toCollapsed',
      animationDuration: '1s',
      msTransform: 'rotate(0deg)', /* IE 9 */
      webkitTransform: 'rotate(0deg)', /* Chrome, Safari, Opera */
      transform: 'rotate(0deg)',
      width: '350px',
      textAlign: 'center',
      border: '1px solid yellow',
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '5px',
      borderRadius: '5px',
      borderStyle: 'ridge',
      borderColor: 'white',
      borderWidth: '8px',
      fontFamily: 'Muli Helvetica Neue Helvetica Arial sans-serif',
      textAlign: 'justify'

    }
    const FontStyle= {

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
      <div className="ag-theme-dark">
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
