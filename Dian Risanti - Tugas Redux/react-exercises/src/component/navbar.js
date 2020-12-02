import React from 'react'

import {
    Navbar,
    Nav,
    NavDropdown,
    Dropdown
} from 'react-bootstrap'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import {logout} from '../action'

class Navigation extends React.Component{
    logoutHandler = () => {
        this.props.logout()
        localStorage.removeItem('username')
    }

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
                            <NavDropdown.Item href="/news">News API</NavDropdown.Item>
                            <NavDropdown.Item href="/table-json">Table JSON</NavDropdown.Item>
                            <NavDropdown.Item href="/counter">Counter</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Dropdown style={{marginRight: "5%"}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.props.username ? this.props.username : 'Username'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                this.props.username
                                ?
                                <Dropdown.Item onClick={this.logoutHandler}>Logout</Dropdown.Item>
                                :
                                <div>
                                    <Dropdown.Item as={Link} to='/login'>Login</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/register'>Register</Dropdown.Item>
                                </div>
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        username: state.user.username
    }
}

export default connect(mapStateToProps, {logout})(Navigation)