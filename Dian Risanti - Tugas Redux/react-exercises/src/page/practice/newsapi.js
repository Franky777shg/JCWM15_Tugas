import React from 'react'
import Axios from 'axios'

import {
    Card,
    Button,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap'

import './newsapi.css'

let URL = 'http://newsapi.org/v2/top-headlines?country='
let CATEGORY = '&category='
let KEY = '&apiKey=b8263b914a0f48d095bbbf4067eab603'

class News extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
            id: "",
            category: "",
            dropDownCountry: "Country",
            dropDownCategory: "Category"
        }
    }

    changeCountry(text) {
        this.setState({dropDownCountry: text})
    }

    changeCategory(text) {
        this.setState({dropDownCategory: text})
    }

    componentDidUpdate(){
        Axios.get(URL +`${this.state.id}`+ CATEGORY +`${this.state.category}`+ KEY)
        .then((res) => {
            console.log(res)
            this.setState({news: res.data.articles})
        })
        .catch((err) => console.log(err))
    }

    showCard = () => {
        return this.state.news.map((item,index) => {
            return (
                <Card style={styles.cardMenu} key={index}>
                    <Card.Img variant="top" src={item.urlToImage} style={styles.cardImg} />
                    <Card.Body style={styles.cardBody}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button href={item.url} variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            )
        })
    }

    render() {
        console.log(this.state.news)
        return(
            <div>
                <Navbar bg="light" expand="lg" style={styles.navbar}>
                    <Navbar.Brand href="#home">News API</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div style={styles.dropdownMenu}>
                            <Nav className="mr-auto" onSelect={(eventKey) => this.setState({id: eventKey})}>
                                <NavDropdown title={this.state.dropDownCountry} id="basic-nav-dropdown">
                                    <NavDropdown.Item eventKey="ar"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Argentina</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="au"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Australia</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="at"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Austria</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="be"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Belgium</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="br"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Brazil</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="bg"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Bulgaria</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ca"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Canada</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="cn"><div onClick={(e) => this.changeCountry(e.target.textContent)}>China</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="co"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Colombia</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="cu"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Cuba</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="cz"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Czech Republic</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="eg"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Egypt</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="fr"><div onClick={(e) => this.changeCountry(e.target.textContent)}>France</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="de"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Germany</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="gr"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Greece</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="hk"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Hong Kong</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="hu"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Hungary</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="in"><div onClick={(e) => this.changeCountry(e.target.textContent)}>India</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="id"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Indonesia</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ie"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Ireland</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="il"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Israel</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="it"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Italy</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="jp"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Japan</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="lv"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Lithuania</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="my"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Malaysia</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="mx"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Mexico</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ma"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Morocco</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="nl"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Netherlands</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="nz"><div onClick={(e) => this.changeCountry(e.target.textContent)}>New Zealand</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ng"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Nigeria</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="no"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Norway</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ph"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Philippines</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="pl"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Poland</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="pt"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Portugal</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ro"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Romania</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ru"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Russia</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="sa"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Saudi Arabia</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="rs"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Serbia</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="sg"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Singapore</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="sk"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Slovakia</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="si"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Slovenia</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="za"><div onClick={(e) => this.changeCountry(e.target.textContent)}>South Africa</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="kr"><div onClick={(e) => this.changeCountry(e.target.textContent)}>South Korea</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="se"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Sweden</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ch"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Switzerland</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="tw"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Taiwan</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="th"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Thailand</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="tr"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Turkey</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ae"><div onClick={(e) => this.changeCountry(e.target.textContent)}>UAE</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ua"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Ukraine</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="gb"><div onClick={(e) => this.changeCountry(e.target.textContent)}>United Kingdom</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="us"><div onClick={(e) => this.changeCountry(e.target.textContent)}>United State</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ve"><div onClick={(e) => this.changeCountry(e.target.textContent)}>Venuzuela</div></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="mr-auto" onSelect={(eventKey) => this.setState({category: eventKey})}>
                                <NavDropdown title={this.state.dropDownCategory} id="basic-nav-dropdown">
                                    <NavDropdown.Item eventKey="business"><div onClick={(e) => this.changeCategory(e.target.textContent)}>Business</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="entertainment"><div onClick={(e) => this.changeCategory(e.target.textContent)}>Entertaiment</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="health"><div onClick={(e) => this.changeCategory(e.target.textContent)}>Health</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="science"><div onClick={(e) => this.changeCategory(e.target.textContent)}>Science</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="sports"><div onClick={(e) => this.changeCategory(e.target.textContent)}>Sports</div></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="technology"><div onClick={(e) => this.changeCategory(e.target.textContent)}>Technology</div></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                    <div style={styles.author}>
                        <h6>DIANRISANTI</h6>
                    </div>
                </Navbar>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {this.showCard()}
                </div>
            </div>
        )
    }  
}

const styles = {
    navbar: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    dropdownMenu: {
        width: "120px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    author: {
        color: "#457b9d",
    },

    cardMenu: {
        display: "flex",
        flexDirection: "column",
        width: "18rem"
    },

    cardImg: {
        height: "10rem"
    },

    cardBody: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between" 
    }
}

export default News