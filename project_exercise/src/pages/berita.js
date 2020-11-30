import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button,
    Dropdown,
    DropdownButton,
    DropdownItem,
} from 'react-bootstrap'


let url = `http://newsapi.org/v2/top-headlines?country=id&apiKey=`
let key = '51c9cd4791df43c9805672b649f203e7'

class Berita1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            berita: [],
            listNeg: [
                'Argentina',
                'Australia',
                'Austria'
            ],
            negara: [
                'http://newsapi.org/v2/top-headlines?country=ar&apiKey=',
                'http://newsapi.org/v2/top-headlines?country=au&apiKey=',
                'http://newsapi.org/v2/top-headlines?country=at&apiKey='
            ],
            category: [
                'Business',
                'Entertainment',
                'Health',
                'Science',
                'Sports',
                'Technology',
            ],
            catLink: [
                '&category=business',
                '&category=entertainment',
                '&category=health',
                '&category=science',
                '&category=sports',
                '&category=technology'
            ]
        }
    }

    componentDidMount() {
        Axios.get(url + key)
            .then((response) => {
                console.log(response)
                this.setState({ berita: response.data.articles })
            })
            .catch((error) => console.log(error))
    }

    dropdownCountry = () => {
        return (
            <DropdownButton title='Country'>
                <div>
                    {this.state.listNeg.map((item, index) => {
                        return (
                            <Dropdown.Item key={index} onClick={() => this.pindahNeg(index)}>
                                {item}
                            </Dropdown.Item>
                        )
                    })}
                </div>
            </DropdownButton>

        )
    }

    pindahNeg = (index) => {
        url = this.state.negara[index]
        Axios.get (url + key)
            .then((response) => {
                console.log(response.data)
                this.setState ({berita: response.data.articles})
            })
            .catch((error) => console.log(error))
        }

    pindahCat = (index) => {
        let newUrl = url.slice(0, 46) + this.state.catLink[index] + url.slice(46, url.length)
        Axios.get (newUrl + key)
            .then((response) => {
                console.log(response.data)
                this.setState ({berita: response.data.articles})
            })
            .catch((error) => console.log(error))
        }

    dropdownCategory = () => {
        return (
            <DropdownButton title='Category'>
                <div>
                    {this.state.category.map((item, index) => {
                        return (
                            <Dropdown.Item key={index} onClick={() => this.pindahCat(index)}>
                                {item}
                            </Dropdown.Item>
                        )
                    })}
                </div>
            </DropdownButton>

        )
    }

    showCardNews = () => {
        return this.state.berita.map((item, index) => {
            return (
                <Card style={{ width: '18rem', marginRight: '25px' }} key={index}>
                    <Card.Img variant="top" src={item.urlToImage} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button href={item.url} variant="primary" >Read more</Button>
                    </Card.Body>
                </Card>
            )
        })
    }


    render() {
        console.log(this.state.berita)
        return (
            <div>
                <div style={{ display: 'flex'}}>
                    <h1>News API</h1>
                    <div>{this.dropdownCountry()}</div>
                    <div>{this.dropdownCategory()}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.showCardNews()}
                </div>
            </div>
        )
    }
}

export default Berita1