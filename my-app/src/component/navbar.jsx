import React from "react";
import { Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import {logout} from "../action"

class Navigation extends React.Component {
  handleLogout = () => {
    this.props.logout()
    localStorage.removeItem('username')
}
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"> React-Exercise</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" style={{ textDecoration: "none" }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/carousel" style={{ textDecoration: "none" }}>
            Carousel
          </Nav.Link>

          <NavDropdown title="Exercise" id="basic-nav-dropdown">
            <NavDropdown.Item
              as={Link}
              to="/todolist"
              style={{ textDecoration: "none" }}
            >
              To Do List
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/news"
              style={{ textDecoration: "none" }}
            >
              News
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/json"
              style={{ textDecoration: "none" }}
            >
              Table JSON
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/counter"
              style={{ textDecoration: "none" }}
            >
              Counter
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
            <i className="fas fa-user"></i>{" "}{" "}
            {this.props.username ? this.props.username : "username"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {this.props.username ? (
              <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
            ) : (
              <> 
              <Dropdown.Item as={Link} to="/login" style={{ textDecoration: "none" }}>Login</Dropdown.Item>
              <Dropdown.Item as={Link} to="/register" >Register</Dropdown.Item>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
  };
};

export default connect(mapStateToProps,{logout})(Navigation);
