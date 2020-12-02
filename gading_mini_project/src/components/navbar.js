import React, { Component } from 'react'

import {
    Navbar,
    Nav,
    NavDropdown,
    Dropdown,
    DropdownButton

} from 'react-bootstrap'

import {Link, LinkContainer} from 'react-router-dom'

import {logout} from '../action'

import {connect} from 'react-redux'


 class NavbarComponent extends React.Component {

    handleLogout = () => {
        this.props.logout()
        localStorage.removeItem('username')
    }
    
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
                            <NavDropdown.Item as={Link} to='/toDoListpage'>
                                To Do List                     
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/newspage'>
                                News Page                     
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/tabelJSON'>
                                Tabel Json                     
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/counter'>
                                Counter                     
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Dropdown style={{marginRight: '45px'}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.props.username ? this.props.username : "Username"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {this.props.username
                                ? 
                                <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
                                :
                                <>
                                    <Dropdown.Item as={Link} to='/login'>
                                        Login
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/register'>
                                        Register
                                    </Dropdown.Item>
                                </>
                            }
                        </Dropdown.Menu>
                    </Dropdown>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps, {logout})(NavbarComponent)
