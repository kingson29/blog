import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";
class NavBarMobile extends Component {
  state = {};
  render() {
    const {
      leftItems,
      onPusherClick,
      onToggle,
      rightItems,
      visible,
      children
    } = this.props;
    console.log(leftItems);
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          items={leftItems}
          vertical
          visible={visible}
        >
          {leftItems.map(item => {
            return <Menu.Item as="a">{item.content}</Menu.Item>;
          })}
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          onClick={onPusherClick}
          style={{ minHeight: "100vh" }}
        >
          <Menu fixed="top" inverted>
            <Menu.Item onClick={onToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Menu position="right">
              {rightItems.map(item => {
                return <Menu.Item name={item.content} />;
              })}
            </Menu.Menu>
          </Menu>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default NavBarMobile;
