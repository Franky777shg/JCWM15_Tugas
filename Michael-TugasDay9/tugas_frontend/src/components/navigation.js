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

class Navigation extends React.Component {
    handlelogout = () => {
        this.props.logout()
        localStorage.removeItem('username')
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>KNIGHTFURY |</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/' style={{color:'white', textDecoration:'none'}}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='/carousel' style={{color:'white', textDecoration:'none'}}>
                            Carousel
                        </Nav.Link>
                        <NavDropdown title="App" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to= '/to_do_list' style={{color:'#596275', textDecoration:'none'}}>To Do List App</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to= '/news' style={{color:'#596275', textDecoration:'none'}}>News App</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to= '/data_table' style={{color:'#596275', textDecoration:'none'}}>Data Table App</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Dropdown style={{marginRight:'40px'}}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            {this.props.username ? this.props.username : 'Username'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.props.username
                            ?
                            <Dropdown.Item onClick={this.handlelogout}>Logout</Dropdown.Item>
                            :
                            <>
                            <Dropdown.Item as={Link} to='/login'>Login</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/register'>Register</Dropdown.Item>
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
        username: state.login.username
    }
}

export default connect(mapStateToProps, {logout}) (Navigation)
