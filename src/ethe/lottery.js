import web3 from "../required/web3"

//Deployed address
const address = "0x0D7C8F6c7177eeb64B2A0e5a470f8E4C7B2695F2"

//Contract Interface aka ABI
const abi = [{"constant":true,"inputs":[],
"name" :"manager",
"outputs" :[{"name":"","type":"address"}],
"payable" :false,
"stateMutability" :"view",
"type" :"function" },
{ "constant" :false,
"inputs" :[],
"name" :"pickWinner",
"outputs" :[],
"payable" :false,
"stateMutability" :"nonpayable",
"type" :"function" },
{ "constant" :true,
"inputs" :[],
"name" :"getPlayers",
"outputs" :[{"name":"","type":"address[] "}]," payable ":false," stateMutability ":" view "," type ":" function "},{" constant ":false," inputs ":[]," name ":" enter "," outputs ":[]," payable ":true," stateMutability ":" payable "," type ":" function "},{" constant ":true," inputs ":[{" name ":""," type ":" uint256 "}]," name ":" players "," outputs ":[{" name ":""," type ":" address "}]," payable ":false," stateMutability ":" view "," type ":" function "},{" inputs ":[]," payable ":false," stateMutability ":" nonpayable "," type ":" constructor "}]

//Create a new local contract instance with the address and the abi, that is deployed to the blockchain



export default new web3.eth.Contract(abi,address)




