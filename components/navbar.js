import React from 'react'
import {
    Navbar, Nav, NavDropdown, Form, FormControl, Button
} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <div style={{display: "flex", height: "10px"}}>
                    <img style={{marginTop: "-19px"}} width="50" height="50" src="https://reactstrap.github.io/assets/logo.png"/>
                    <p style={{marginTop: "-10px", marginLeft: "10px"}}>React-Bootstrap</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>
                    <Link to="/carousel" style={{color: 'grey'}}>Carousel</Link>
                </Nav.Link>
                <NavDropdown title="Practice" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <Link to="/todolist">To-Do-List</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to="/news">News</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to="/table">Table</Link>
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation