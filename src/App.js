import { Component } from "react";
import web3 from "./required/web3";

import "./index.css"
class App extends Component {
  render() {

    web3.eth.getAccounts()
      .then(console.log)

    return (
      <div className="col-md-4">

        {/* <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button>
          </div>
        </div> */}

       <web3/> 


      </div>
    );
  
  }
}

export default App;
