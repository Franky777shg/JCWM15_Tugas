import React from 'react'
import Axios from 'axios'

import {Card, Button} from 'react-bootstrap'
import {Dropdown} from 'react-bootstrap'

let URL = 'http://newsapi.org/v2/top-headlines?country='
let KEY = '&apiKey=0e1bc8fbfa1c45a3be16d4f2b4e43308'
let CAT = '&category='

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            countryID: [
                'ar', 'au', 'at', 'be', 'br', 'bg', 'ca', 'cn', 'co', 'cu', 'cz', 'eg', 'fr', 'de', 'gr', 'hk', 'hu', 'in', 
                'id', 'ie', 'il', 'it', 'jp', 'lv', 'lt', 'my', 'mx', 'ma', 'nl', 'nz', 'ng', 'no', 'ph', 'pl', 'pt', 'ro', 
                'ru', 'sa', 'rs', 'sg', 'sk', 'si', 'za', 'kr', 'se', 'ch', 'tw', 'th', 'tr', 'ae', 'ua', 'gb', 'us', 've'
            ],
            countryName: [
                'Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Bulgaria', 'Canada', 'China', 'Colombia', 'Cuba', 
                'Czech Republic', 'Egypt', 'French', 'Germany', 'Greece', 'Hong Kong', 'Hungary', 'India', 'Indonesia', 'Ireland', 
                'Israel', 'Italy', 'Japan', 'Latvia', 'Lithuania', 'Malaysia', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand', 
                'Nigeria', 'Norway', 'Philippines', 'Poland', 'Portugal', 'Romania', 'Russia', 'Saudi Arabia', 
                'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Sweden', 'Switzerland', 
                'Taiwan', 'Thailand', 'Turkey', 'UAE', 'Ukraine', 'United Kingdom', 'United States', 'Venuzuela'
            ],
            category: ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'],
            countryCurrent: ['Indonesia'],
            categoryCurrent: ['General']
        }
    }
    componentDidMount() {
        Axios.get(URL + this.state.countryID[18] + KEY)
        .then((res) => {
            this.setState({ news: res.data.articles })
        })
    }

    showCard = () => {
        return this.state.news.map((item, index) => {
            return (
                <Card style={{ width: '18rem', margin: "15px"}} key={index}>
                    <Card.Img variant="top" src={item.urlToImage} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Button href={item.url} variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            )
        })
    }

    changeCountry = (index) => {
        this.setState({countryCurrent: this.state.countryName[index]})
        Axios.get(URL + this.state.countryID[index] + KEY)
        .then(res => {
            this.setState({ news: res.data.articles })
        })
    }
    changeCategory = (index) => {
        this.setState({categoryCurrent: this.state.category[index]})
        Axios.get(URL + this.state.countryID[index] + CAT + this.state.category[index] + KEY)
        .then(res => {
            this.setState({ news: res.data.articles })
        })
    }

    setCountry = () => {
        return this.state.countryName.map((item, index) => {
            return (
                <Dropdown.Item key={index} onClick={() => this.changeCountry(index)}>{item}</Dropdown.Item>
            )
        })
    }
    setCategory = () => {
        return this.state.category.map((item, index) => {
            return (
                <Dropdown.Item key={index} onClick={() => this.changeCategory(index)}>{item}</Dropdown.Item>
            )
        })
    }

    render() {
    console.log(this.state.news)
    return (
        <div>
            <div style={{display: "flex", flexDirection: "column" , margin: "25px 0 50px 0", textAlign: "center"}}>
                <h1 style={{margin: "0 0 10px 0"}}>News API</h1>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h5 style={{margin: "0 40px 0 10px"}}>Country:</h5>
                    <h5>Category:</h5>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Dropdown style={{margin: "0 10px 0 0"}}>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">{this.state.countryCurrent}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.setCountry()}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown style={{margin: "0 0 0 10px"}}>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">{this.state.categoryCurrent}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.setCategory()}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>{this.showCard()}</div>
        </div>
    )
    }
}
export default News;
