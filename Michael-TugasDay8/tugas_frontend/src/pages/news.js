import React from 'react'
import Axios from "axios"
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Dropdown,
} from "react-bootstrap"

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        news: [],
        category: "general",
        country: "id",
        showCategory: [
            "business",
            "entertainment",
            "general",
            "health",
            "science",
            "sports",
            "technology",
        ],
        showCountry: [
            "au","cn","eg","fr","de","gr","hk","id","in","it","jp","my","nl","ph","ru","sg","gb","us"
        ],
      }
    }
    data = (categoryId, country) => {
      let URL = `http://newsapi.org/v2/top-headlines?apiKey=92c554eea6424124afaf206308465695&category=${categoryId}&country=${country}`;
      Axios.get(URL)
        .then((res) =>
          this.setState({
            news: res.data.articles,
            category: this.state.category,
            country: this.state.country,
          }
          )
        )
        .catch((e) => console.log(e.message))
        this.newsList()
    }
    changeCategory = (categoryId) => {
      this.setState({
        ...this.props,
        category: categoryId,
      }
      )
      this.data(categoryId, this.state.country)
    }
    changeCountry = (countryId) => {
      this.setState({
        ...this.props,
        country: countryId,
      }
      )
      this.data(this.state.category, countryId)
    }
    newsList = () => {
      return this.state.news.map((item, index) => {
        return (
          <Col md={3} key={index}>
            <Card style={{ width: '350px', marginBottom: "20px" }}>
              <Card.Img variant="top" src={item.urlToImage}/>
              <Card.Body style={{ backgroundColor: "gray" }}>
                <Card.Title style={{ color: "white" }}>{item.title}</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  {item.description}
                </Card.Text>
                <Button variant="dark" href={item.url}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )
      }
      )
    }
    countryList = () => {
        return this.state.showCountry.map((country) => (
          <Dropdown.Item
              onClick={() => this.changeCountry(country)}
              key={country}
              href="#/news">
              {country}
          </Dropdown.Item>
          )
          )
    }
    categoryList = () => {
        return this.state.showCategory.map((category) => (
          <Dropdown.Item
              onClick={() => this.changeCategory(category)}
              key={category}
              href="#/news">
              {category}
          </Dropdown.Item>
          )
          )
    }
    componentDidMount() {
      this.data(this.state.category, this.state.country)
    }
    render() {
      return (
        <div style={{backgroundColor:'black'}}>
          <Container fluid>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div style={{display:'flex', marginTop:'10px'}}>
                    <Dropdown  style={{marginRight:'20px'}}>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" style={{width: '160px'}}>
                            Country
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.countryList()}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" style={{width: '160px'}}>
                            Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.categoryList()}
                        </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <p style={{fontSize: "30px", color:'white'}}>{this.state.country} | {this.state.category}</p>
                  </div>
              </div>
            <Row>{this.newsList()}</Row>
          </Container>
        </div>
      )
    }
  }
export default News