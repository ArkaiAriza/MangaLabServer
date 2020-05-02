import React from 'react';

import { Menu } from 'semantic-ui-react';

class MenuComponent extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {}

  render() {
    const activeItem = this.state;
    return (
      <Menu
        vertical
        inverted
        fluid
        style={{ backgroundColor: '#303030', paddingTop: '40px' }}
        alignItems="center"
      >
        <Menu.Item
          color="orange"
          name="home"
          active={this.state.activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          color="orange"
          name="arkai"
          active={this.state.activeItem === 'arkai'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          color="orange"
          name="Julian"
          active={this.state.activeItem === 'Julian'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          color="orange"
          name="david"
          active={this.state.activeItem === 'david'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          color="orange"
          name="ariza"
          active={this.state.activeItem === 'ariza'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuComponent;
