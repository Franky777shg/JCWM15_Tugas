import React, { Component } from "react";

import Axios from "axios";

import "../css/newspage.css";

//#region Bootstrap
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Dropdown,
} from "react-bootstrap";
//#endregion

document.body.style = "background: #F2F2F2;";

export default class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      category: "general",
      country: "us",
      showCategory: [
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
      ],
      showCountry: [
        "be",
        "bg",
        "br",
        "ca",
        "ch",
        "cn",
        "co",
        "cu",
        "cz",
        "de",
        "eg",
        "fr",
        "gb",
        "gr",
        "hk",
        "hu",
        "id",
        "ie",
        "il",
        "in",
        "it",
        "jp",
        "kr",
        "lt",
        "lv",
        "ma",
        "mx",
        "my",
        "ng",
        "nl",
        "no",
        "nz",
        "ph",
        "pl",
        "pt",
        "ro",
        "rs",
        "ru",
        "sa",
        "se",
        "sg",
        "si",
        "sk",
        "th",
        "tr",
        "tw",
        "ua",
        "us",
        "ve",
        "za",
      ],
    };

}

  

  //#region Handle Data
  fetchDataNews = (categoryId, country) => {
    var URL = `http://newsapi.org/v2/top-headlines?apiKey=25498c2113be42bf93a9e929dc34c983&category=${categoryId}&country=${country}`;
    Axios.get(URL)
      .then((res) =>
        this.setState({
          news: res.data.articles,
          category: this.state.category,
          country: this.state.country,
        })
      )
      .catch((e) => console.log(e.message));
    this.layoutBerita();
  };

  handleChangeCategory = (categoryId) => {
    this.setState({
      ...this.props,
      category: categoryId,
    });

    this.fetchDataNews(categoryId, this.state.country);
  };

  handleChangeCountry = (countryId) => {
    this.setState({
      ...this.props,
      country: countryId,
    });

    this.fetchDataNews(this.state.category, countryId);
  };
  //#endregion

  //#region Layout Berita
  layoutBerita = () => {
    return this.state.news.map((item, index) => {
      return (
        <Col md={4} key={index}>
          <Card style={{ marginBottom: "100px" }}>
            <Card.Img
              variant="top"
              style={{ height: "300px", width: "100%" }}
              src={item.urlToImage}
            />
            <Card.Body style={{ backgroundColor: "#0468BF" }}>
              <Card.Title style={{ color: "white" }}>{item.title}</Card.Title>
              <Card.Text style={{ color: "white" }}>
                {item.description}
              </Card.Text>
              <Button variant="danger" href={item.url}>
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };
  //#endregion

  //#region List Menu
  listCategoryMenu = () => {
      return this.state.showCategory.map((category) => (
        <Dropdown.Item
            onClick={() => this.handleChangeCategory(category)}
            key={category}
            href="#/action-1">
            {category}
        </Dropdown.Item>
        ))
  }

  listCountryMenu = () => {
      return this.state.showCountry.map((country) => (
        <Dropdown.Item
            onClick={() => this.handleChangeCountry(country)}
            key={country}
            href="#/action-1">
            {country}
        </Dropdown.Item>
        ))
  }
  //#endregion

  //#region LIFECYCLE
  componentDidMount() {
    this.fetchDataNews(this.state.category, this.state.country);
  }
  //#endregion
  
  render() {
    return (
      <div>
        <Container fluid>
          <Row style={{ padding: "0% 15%" }}>
            <Col md={12} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "100px", fontWeight: "bolder" }}>
                Dunia Dalam Berita.
              </p>
            </Col>
          </Row>
          <Row style={{ padding: "0% 15%" }}>
            <Col md={12} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "80px", fontWeight: "bolder", opacity: "80%",}}>
                Dunia Dalam Berita.
              </p>
            </Col>
          </Row>
          <Row style={{ padding: "0% 15%" }}>
            <Col md={12} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "60px", fontWeight: "bolder", opacity: "60%",}}>
                Dunia Dalam Berita.
              </p>
            </Col>
          </Row>
          <Row style={{ padding: "0% 15%" }}>
            <Col md={12} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "40px", fontWeight: "bolder", opacity: "40%",}}>
                Dunia Dalam Berita.
              </p>
            </Col>
          </Row>
          <Row style={{ padding: "0% 15%" }}>
            <Col md={12} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "20px", fontWeight: "bolder", opacity: "20%",}}>
                Dunia Dalam Berita.
              </p>
            </Col>
          </Row>
          <Row style={{ padding: "5% 15%", paddingBottom: "3%" }}>
            <Col md={12} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "50px", fontWeight: "bolder" }}>
                Terupdate Teraktual Terpercaya
              </p>
            </Col>
          </Row>
          <Row style={{ padding: "5% 15%", paddingBottom: "3%" }}>
            <Col md={6} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "50px", fontWeight: "bolder" }}>
                Your Watching :
              </p>
            </Col>
            <Col md={6} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "50px", fontWeight: "bolder" }}>
                {this.state.country} | {this.state.category}
              </p>
            </Col>
          </Row>
          <Row style={{ padding: "5% 15%", paddingTop: "3%" }}>
            <Col md={6} style={{ textAlign: "center" }}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width: '80%', padding: '2% 0%'}}>
                        Category
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.listCategoryMenu()}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col md={6} style={{ textAlign: "center" }}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width: '80%', padding: '2% 0%'}}>
                        Country
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.listCountryMenu()}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
          </Row>
          <Row>{this.layoutBerita()}</Row>
        </Container>
      </div>
    );
  }
}
