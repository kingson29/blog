import React from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
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

export default App;
