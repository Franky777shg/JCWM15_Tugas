import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link  >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
          <Link to="/carousel">Carousel</Link>
            </Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <Link to="/todolist">To Do List</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            <Link to="/news">News</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
