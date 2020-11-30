import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown
    // Form,
    // FormControl,
    // Button
} from 'react-bootstrap'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">NEWS API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link>
                            <Link to='/' >Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/content1' >Content 1</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/content2' >Content 2</Link>
                        </Nav.Link> */}
                        <NavDropdown title="Country" id="basic-nav-dropdown">
                            <NavDropdown.Item href="http://newsapi.org/v2/top-headlines?country=au&apiKey=3d794e2fc88942dc87ca9b9b7d263aa2">Australia</NavDropdown.Item>
                            <NavDropdown.Item href="http://newsapi.org/v2/top-headlines?country=at&apiKey=3d794e2fc88942dc87ca9b9b7d263aa2">Austria</NavDropdown.Item>
                            <NavDropdown.Item href="http://newsapi.org/v2/top-headlines?country=be&apiKey=3d794e2fc88942dc87ca9b9b7d263aa2">Belgium</NavDropdown.Item>
                            <NavDropdown.Item href="http://newsapi.org/v2/top-headlines?country=br&apiKey=3d794e2fc88942dc87ca9b9b7d263aa2">Brazil</NavDropdown.Item>
                            <NavDropdown.Item href="http://newsapi.org/v2/top-headlines?country=bg&apiKey=3d794e2fc88942dc87ca9b9b7d263aa2">Australia</NavDropdown.Item>
                            <NavDropdown.Item href="http://newsapi.org/v2/top-headlines?country=ca&apiKey=3d794e2fc88942dc87ca9b9b7d263aa2">Austria</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Topic" id="basic-nav-dropdown">
                            <NavDropdown.Item>Business</NavDropdown.Item>
                            <NavDropdown.Item>Entertainment</NavDropdown.Item>
                            <NavDropdown.Item>Health</NavDropdown.Item>
                            <NavDropdown.Item>Science</NavDropdown.Item>
                            <NavDropdown.Item>Sports</NavDropdown.Item>
                            <NavDropdown.Item>Technology</NavDropdown.Item>
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

export default Navigation
