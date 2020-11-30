import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button

} from 'react-bootstrap'

// import link
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to='/'>
                        React-Bootstrap
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to='/LinkPage'>Link Page</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/Carousel'>Carousel</Link>
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <Link to='/TodoList'>
                                Todo List
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='/NewsAPIid'>
                                News API
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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