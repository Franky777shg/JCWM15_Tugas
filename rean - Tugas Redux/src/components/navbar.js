import React from 'react'
import {Navbar, Nav, NavDropdown, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import {connect } from 'react-redux'

import {logout} from '../action'

class Navigation extends React.Component {
    handleLogout = () => {
        this.props.logout()
        localStorage.removeItem('username')
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <div style={{display: "flex", height: "10px"}}>
                    <img alt="asd" style={{marginTop: "-19px"}} width="50" height="50" src="https://reactstrap.github.io/assets/logo.png"/>
                    <p style={{marginTop: "-10px", marginLeft: "10px"}}>React-Bootstrap</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/carousel" style={{color: 'grey'}}>Carousel</Nav.Link>
                <NavDropdown title="Practice" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/todolist">To-Do-List</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to="/news">News</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to="/table">Table</Link></NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Dropdown style={{margin: "0 30px 0 0"}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {this.props.username ? this.props.username.toUpperCase() : 'Username'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.props.username 
                            ? 
                            <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
                            :
                            <>
                                <Dropdown.Item><Link to="/login">Login</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/register">Register</Link></Dropdown.Item>
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

export default connect(mapStateToProps, {logout})(Navigation)