import React from "react"
// mengimport komponen/tagline2 yg ada d dalam navbar dari package react bootstrap yg sdh d download 
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'

//import link react router dom
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to='/'>Home</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to='/carousel'>carousel</Link>
                        </Nav.Link>
                        <NavDropdown title="Practice" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/todolist'>todolist</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">task1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">task2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">task3</NavDropdown.Item>
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

//setelah d import jgn lp d xport
export default Navigation
// Navigation ini akan kita pakai d app