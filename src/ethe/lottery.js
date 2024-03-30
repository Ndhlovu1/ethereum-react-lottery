import web3 from "../required/web3"

//Deployed address
const address = "0x72689d7715a391d39f7a13c412d891a4b7ef8249"

//todo Link to the Live TestNet Transaction Below :
//todo https://sepolia.etherscan.io/tx/0xd988e398355550c6d4e03a9b8fbcf47dc6abda0e1a6eb9faebe7be80a15456df
//todo Link to on how to get help on Remix ABI - https://ethereum.stackexchange.com/questions/26900/how-to-get-the-contract-abi-in-new-remix-ide
// Remember https://ethereum.stackexchange.com/tour

//Contract Interface aka ABI
const abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "enters",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pickWinner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPlayers",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
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
		"name": "players",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
//Create a new local contract instance with the address and the abi, that is deployed to the blockchain
//Below is our window into the blockchain and this allows us to use all the features in test folder of the solidity contract of the project
export default new web3.eth.Contract(abi ,address)




