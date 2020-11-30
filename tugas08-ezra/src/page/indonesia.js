import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button
} from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

let url = 'http://newsapi.org/v2/top-headlines?country=id&apiKey='
let key = '3d794e2fc88942dc87ca9b9b7d263aa2'

class Indo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }
    componentDidMount() {
        Axios.get(url+key)
            .then((res) => {
                console.log(res)
                this.setState({ news: res.data.articles })
            })
            .catch((err) => console.log(err))

    }
    showCard = () => {
        return this.state.news.map((item, index) => {
            return (
                <Card style={{ width: '18rem', marginRight: '15px' }}>
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
        console.log(this.state.news)
        return (
            <div>
                <h1>NEWS API</h1>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {this.showCard()}
                </div>
            </div>
        )
    }
}
export default Indo