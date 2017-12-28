const ABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "getPeople",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
        },
        {
          "name": "",
          "type": "bytes32[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_firstName",
          "type": "bytes32"
        },
        {
          "name": "_lastName",
          "type": "bytes32"
        },
        {
          "name": "_age",
          "type": "uint256"
        }
      ],
      "name": "addPerson",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "people",
      "outputs": [
        {
          "name": "firstName",
          "type": "bytes32"
        },
        {
          "name": "lastName",
          "type": "bytes32"
        },
        {
          "name": "age",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
]

module.exports = ABI
