import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";
import NavBarMobile from "./navbarMobile";
import NavBarDesktop from "./navbarDesktop";
import NavBarChildren from "./navbarChildren";

export default class NavBar extends Component {
  state = {
    activeItem: "home",
    leftItems: [
      { as: "a", content: "CRM", key: "CRM" },
      { as: "a", content: "Invoicing", key: "Invoicing" },
      { as: "a", content: "Project Management", key: "Project Management" },
      { as: "a", content: "Resources Management", key: "Resources Management" },
      { as: "a", content: "Data Management", key: "Data Management" }
    ],
    rightItems: [
      { as: "a", content: "Sign-In", key: "Sign-In" },
      { as: "a", content: "Login", key: "Login" }
    ],
    visible: false
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { leftItems, rightItems, visible } = this.state;
    return (
      <React.Fragment>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          />
          <NavBarChildren></NavBarChildren>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren></NavBarChildren>
        </Responsive>
      </React.Fragment>
    );
  }
}
