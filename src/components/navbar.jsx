import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="ui secondary pointing menu">
          <Link class="active item" to="/home">
            Home
          </Link>
          <Link class="item" to="/Spreadsheet">
            Spreadsheet
          </Link>
          <Link class="item" to="/crm">
            Invoicing
          </Link>
          <Link class="item" to="/accounting">
            CRM
          </Link>
          <Link class="item" to="/">
            Project Management
          </Link>
          <Link class="item" to="/">
            Accounting Software
          </Link>
          <Link class="item" to="/">
            Resource Management
          </Link>
          <Link class="item" to="/">
            Data Management
          </Link>
          <div class="right menu">
            <Link class="ui item">Sign Up</Link>
            <Link class="ui item">Log In</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
