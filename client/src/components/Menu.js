import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Menu } from 'semantic-ui-react';

class MenuComponent extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {}

  render() {
    const activeItem = this.state;
    return (
      <Menu size="massive" color="black" inverted>
        <Menu.Item
          as={Link}
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            as={Link}
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MenuComponent;
