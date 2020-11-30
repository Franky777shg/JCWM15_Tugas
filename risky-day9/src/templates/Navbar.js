import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

import "./Navbar.css";

export default function NavBar() {
  console.log(logo);
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#00468b" }} variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} className="logo" /> React-Exercise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/carousel">
              Carousel
            </Nav.Link>
            <NavDropdown title="Practice" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/todo">
                Todo
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/news">
                News
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/table">
                Table JSON
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
