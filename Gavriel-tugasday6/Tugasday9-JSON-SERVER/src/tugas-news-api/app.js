import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button,
    Dropdown,
    DropdownButton
    // DropdownItem
} from 'react-bootstrap'

import Navigation from './componen/navbar'
// import Navigationnews from './componen/navbar-news-api'

let URL = 'http://newsapi.org/v2/top-headlines?country=id&apiKey='
let KEY = '12ffd68416ca4037afb947d7663d95e2'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            country: [
                'Argentina',
                'Thailand',
                'Sweden'
            ],
            category: [
                'business',
                'health',
                'sports'
            ],
            countryLink : [
                'http://newsapi.org/v2/top-headlines?country=ar&apiKey=',
                'http://newsapi.org/v2/top-headlines?country=th&apiKey=',
                'http://newsapi.org/v2/top-headlines?country=se&apiKey='
            ],
            cateLink : [
                '&category=business',
                '&category=health',
                '&category=sports'
            ]


        }
    }

    componentDidMount() {
        Axios.get(URL + KEY)
            .then((res) => {
                console.log(res)
                this.setState({ news: res.data.articles })
            })
            .then((err) => console.log(err))
    }

    showCard = () => {
        return this.state.news.map((item, index) => {
            return (
                <Card style={{ width: '18rem', marginRight: '25px', marginBottom: '15px' }} key={index}>
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

    dropdownCountry = () => {
        return (
            <DropdownButton title="Country">
               <div>
                   {this.state.country.map((item, index) =>{
                       return(
                           <Dropdown.Item key={index} onClick={ () => this.changeCountry(index)}>
                            {item}
                           </Dropdown.Item>
                       )
                    })}
               </div>
            </DropdownButton>
        )
    }

    dropdownCategory = () => {
        return (
            <DropdownButton title="Category">
               <div>
                   {this.state.category.map((item, index) =>{
                       return(
                           <Dropdown.Item key={index} onClick={ () => this.changeCategory()} >
                            {item}
                           </Dropdown.Item>
                       )
                    })}
               </div>
            </DropdownButton>
        )
    }

    changeCountry = (index) => {
        URL = this.state.countryLink[index]
        Axios.get(URL + KEY)
        .then((res) => this.setState({news : res.data.articles}))
        .catch((err) => console.log(err))
    }

    changeCategory = (index) => {
        let newURL = URL.slice(0, 46) + this.state.cateLink[index] + URL.slice(46, URL.lenght)
        Axios.get(newURL + KEY)
        .then((res) => this.setState({news : res.data.articles}))
        .catch((err) => console.log(err))
    }

    render() {
        console.log(this.state.news)
        return (
            <div>
                <Navigation />
                <div style={{display: 'flex'}}>
                    <h1> NEWS API</h1>
                    <div>{this.dropdownCountry()}</div>
                    <div>{this.dropdownCategory()}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.showCard()}
                </div>
            </div>

        );
    }
}

export default App