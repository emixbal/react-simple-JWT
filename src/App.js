import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './screens/Login'
import Home from './screens/Home'

class App extends Component{
  state = {
    angka:0
  }

  render(){
    return(
      <div className="container">
        <hr />
        <div className="card" >
          <div className="card-header">
            hallo
          </div>
          <div className="card-body">
            <Router>
              <Route exact path="/login" component={Login} />
              <Route  path="/home" component={Home} />
            </Router>
          </div>
      </div>
      </div>
    )
  }
}

export default App;