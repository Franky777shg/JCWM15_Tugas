// BERITA
import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button
} from 'react-bootstrap'
import Navigation from './components/navbar'
import { Switch, Route } from 'react-router-dom'

let url = 'http://newsapi.org/v2/top-headlines?country='
let negara = ['au', 'at', 'be', 'br', 'bg', 'ca']
let key = '&apiKey=3d794e2fc88942dc87ca9b9b7d263aa2'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }
    componentDidMount(index) {
        Axios.get(url+negara[index]+key)
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
                <Navigation>
                    {/* <Switch>
                         <Route path='/indonesia' component={Indo} exact />
                     </Switch> */}
                </Navigation>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {this.showCard()}
                </div>
            </div>
        )
    }
}
export default App

