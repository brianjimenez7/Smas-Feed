import React, { Component } from 'react';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';

export default class Navs extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">EIS</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventkey={1} href="#">home</NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export {Navs}