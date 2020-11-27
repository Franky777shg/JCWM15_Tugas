import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>KNIGHTFURY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to= '/home'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to= '/slide'>Carousel</Link>
                        </Nav.Link>
                        <NavDropdown title="App" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to= '/to_do_list'>To Do List App</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Navigation
