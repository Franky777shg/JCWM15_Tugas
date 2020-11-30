import React, { Component } from 'react'

import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Dropdown

} from 'react-bootstrap'

import {Link, LinkContainer} from 'react-router-dom'



export default class NavbarComponent extends React.Component {
    
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    React-Exercise
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to='/'>Home</Link>                        
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/carouselpage'>Carousel</Link>                        
                        </Nav.Link>
                        <NavDropdown title="Tugas" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to='/toDoListpage'>To Do List</Link>                        
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to='/newspage'>News Page</Link>                        
                                </Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
