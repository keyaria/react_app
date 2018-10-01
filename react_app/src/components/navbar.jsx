import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react';



class NavBar extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='Home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item name='Products' active={activeItem === 'products'} onClick={this.handleItemClick}>
          Products
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>

        <Menu.Item>
        <Label basic className="badge">{this.props.totalCounters}</Label>
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;