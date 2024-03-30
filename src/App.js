import { Component } from "react";
import web3 from "./required/web3";
import "../src/ethe/lottery"
import "./index.css"
import lottery from "../src/ethe/lottery";
class App extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {manager : ''}
  // }

  //The above is a code refactoring of creating state
  state = {
    manager : '',
    players: [],
    balance : ''
  }

  //Verify the component was loaded in the lifecyle
  async componentDidMount() {

    //We dont have to specify where - the account we are signed into becomes the default
    const manager = await lottery.methods.manager().call()
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address)

    //Set the state of the manager on the component
    this.setState({ manager, players,balance })

    }

  render() {

    // web3.eth.getAccounts()
    //   .then(console.log)

    return (
      <div className="container">
        <center><h1>Lottery Contract</h1>

          <div className="card">
              <div className="card-body">
                <h5 className="card-title">MANAGED BY</h5>
                <p className="card-text">{this.state.manager}</p>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
              </div>
          </div>

        </center>

        <div className="col-md-4">
          
              {/* <h5 className="card-title">MANAGED BY</h5> */}<br/>
              <p className="card-text">There are a total of {this.state.players.length}</p>
              <p className="card-text">Victory Price : {web3.utils.fromWei(this.state.balance, 'ether')} ether</p>
              {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
         

        </div>

      </div>
    );
  
  }
}

export default App;
