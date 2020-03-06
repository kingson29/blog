import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    const { content } = this.state;
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
