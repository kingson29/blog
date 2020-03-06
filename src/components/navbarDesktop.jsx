import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";
class NarBarDesktop extends Component {
  render() {
    const { leftItems, rightItems } = this.props;
    console.log(leftItems);
    return (
      <Menu fixed="top" inverted>
        {leftItems.map(item => {
          return <Menu.Item name={item.content} />;
        })}
        <Menu.Menu position="right">
          {rightItems.map(item => {
            return <Menu.Item name={item.content} />;
          })}
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NarBarDesktop;
