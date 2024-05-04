import { Component } from "react";
import web3 from "./required/web3";
import "../src/ethe/lottery"
import "./index.css"
import lottery from "../src/ethe/lottery";

const ethlogo = "https://cdn.decrypt.co/wp-content/uploads/2019/03/ethereum.png"
class App extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {manager : ''}
  // }
  
  //The above is a code refactoring of creating state
  state = {
    manager : '',
    players: [],
    balance : '',
    winnerPlayer:'',
    value : '',
    message: ''
  }

  //Verify the component was loaded in the lifecyle
  async componentDidMount() {

    //We dont have to specify where - the account we are signed into becomes the default
    const manager = await lottery.methods.manager().call()
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address)
    const winnerPlayer = await lottery.methods.getWinner().call()

    //Set the state of the manager on the component
    this.setState({ manager, players,balance,winnerPlayer })

    }

  onSubmit = async (event) => {

    //Value of this is set by default in this arrow function
    event.preventDefault()

    const accounts = await web3.eth.getAccounts();

    this.setState({ message:'Waiting on transaction success...' })

    await lottery.methods.enter().send({
      from: accounts[0],
      value : web3.utils.toWei(this.state.value,"ether")
    })

    this.setState({ message:"Successfully entered lottery!" })

  }

  onClick = async () => {
    const accounts = await web3.eth.getAccounts()

    this.setState({message: "Waiting on transaction success..."})

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    })

    this.setState({message: "A winner has been picked!"})

  }


  render() {

    // web3.eth.getAccounts()
    //   .then(console.log)

    return (
      <>
        <div className="container">

          <div class="px-4 py-5 my-5 text-center">
            <img src={ethlogo} height={100} width={100}/>
            <h1 class="display-5 fw-bold text-body-emphasis">LOTTERY CONTRACT</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">
                MANAGED BY : {this.state.manager}
              </p>
            </div>
          </div>


            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body">

                  <h6 className="card-text">Participants : [{this.state.players.length}] people
                  <br/><br/> Price : [{web3.utils.fromWei(this.state.balance, 'ether')} ether]</h6>
                  <hr/>
                  <h4>Join Lottery!</h4>

                  <form onSubmit={this.onSubmit}>
                    <div className="formgroup">
                      <label for="">Amount of Ether to enter</label>
                      <input
                        value={this.state.value}
                        onChange={event => this.setState({value : event.target.value})}
                        required
                      />
                    </div>
                    {/* Send a transaction into the Blockchain */}
                    <button type="submit" class="btn btn-primary">Enter</button>
                  </form>
                  <br/>

                  <hr/>
                  
                  <h4>Select Winner</h4>
                  <button className="btn btn-success" onClick={this.onClick}>PICK</button>
               

                  <div className="alert alert-primary" style={{marginTop:"20px"}} role="alert">
                    STATUS : {this.state.message} <br/>
                    CURRENT WINNER : {this.state.winnerPlayer}
                  </div>
                </div>
            </div>


        </div>
      </>
    );
  
  }
}

export default App;
