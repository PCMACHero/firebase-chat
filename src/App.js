import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize'
import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav"
import {Route, Switch} from "react-router-dom";
import Chat from "./components/chat";
import Home from "./components/home"
import NotFound from "./components/404/404";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/chat" component={Chat}/>
          <Route component={NotFound}/>
        
        </div>
      </div>
    );
  }
}

export default App;
