import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button,
    Navbar,
    NavDropdown
} from 'react-bootstrap'
import {Link} from 'react-router-dom'


let URL = `http://newsapi.org/v2/top-headlines?country=us&apiKey=`
let KEY = '55f625804c9f41ceab506d6925b137d1'

class NewsAPIus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        Axios.get(URL + KEY)
            .then((res) => {
                console.log(res)
                this.setState({ news: res.data.articles })
            })
            .catch((err) => console.log(err))
    }

    showCard = () => {
        return this.state.news.map((item, index) => {
            return (
                <Card style={{ width: '18rem', marginRight: '15px', marginTop: '20px' }} key={index}>
                    <Card.Img variant="top" src={item.urlToImage} />
                    <Card.Body>
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

        return (
            <div>
            <h1>News Api</h1>
            <Navbar>
                <NavDropdown title="Country" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to='/NewsAPIid'>Indonesia</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/NewsAPIus'>USA</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/NewsAPIjp'>Japan</Link></NavDropdown.Item>
                </NavDropdown>
            </Navbar>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {this.showCard()}
            </div>
            
        </div>
        )
    }
}

export default NewsAPIus