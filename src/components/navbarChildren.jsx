import React, { Component } from "react";
import { Container } from "semantic-ui-react";

const NavBarChildren = ({ children }) => {
  return <Container style={{ marginTop: "5em" }}>{children}</Container>;
};

export default NavBarChildren;
