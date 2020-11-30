import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Navigation extends React.Component{
    render() {
        return(
            <Navbar variant="dark" bg="dark">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://cdn.worldvectorlogo.com/logos/react.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Dian Risanti - Exercises
                    </Navbar.Brand>
                </Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to='/' style={{color: 'grey'}}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/carousel' style={{color: 'grey'}}>Carousel</Link>
                        </Nav.Link>
                        <NavDropdown title="Practice" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/practice">Todo List</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation