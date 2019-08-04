import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Rewards from "./Rewards";
import Contact from "./Contact"; 

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Martian Waves Node</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/rewards">Rewards</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/rewards" component={Rewards}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;