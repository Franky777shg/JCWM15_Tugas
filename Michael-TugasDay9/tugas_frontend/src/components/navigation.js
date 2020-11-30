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
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>KNIGHTFURY |</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/' style={{color:'white', textDecoration:'none'}}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='/slide' style={{color:'white', textDecoration:'none'}}>
                            Carousel
                        </Nav.Link>
                        <NavDropdown title="App" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to= '/to_do_list' style={{color:'#3c6382', textDecoration:'none'}}>To Do List App</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to= '/news' style={{color:'#3c6382', textDecoration:'none'}}>News App</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to= '/data_table' style={{color:'#3c6382', textDecoration:'none'}}>Data Table App</Link>
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
