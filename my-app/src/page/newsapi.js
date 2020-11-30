import React from "react";
import Axios from "axios";


import { Card, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
let url="http://newsapi.org/v2/top-headlines?country="
let key="&apiKey=82287471283f42bbadfb6c1d912d40ec"
let id="id"
let kodekat=""
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      berita: [],
      country:[
          {
              negara:"Indonesia",
              id:'id'
          },
          {     
              negara:"Jerman",
              id:'de'
            
          },
          {
              negara:"Korea Selatan",
              id:"kr"
          }
      ],
      kategori:[
        {
          namKat:"Bisnis",
          kode:"&category=business"
        },
        {
          namKat:"Entertainment",
          kode:"&category=entertainment"
        },
        {
          namKat:"Health ",
          kode:"&category=health"
        },
        {
          namKat:"Science",
          kode:"&category=science"
        },
        {
          namKat:"Sports",
          kode:"&category=sports"
        },
        {
          namKat:"Technology",
          kode:"&category=technology"
        }
      ]
    };
  }
  
  pilihanNegara =(idx)=>{
    id=this.state.country[idx].id
    console.log(id)
     return(
         Axios.get(
           `${url}${id}${key}`
         )
           .then((respond) => {
             this.setState({ berita: respond.data.articles })
             console.log(this.state.berita)
           })
           .catch((error) => console.log(error))
     )
  
  }

  pilihKategori=(idx)=>{
      kodekat=this.state.kategori[idx].kode
      console.log(kodekat)
      return(
        Axios.get(
          `${url}${id}${kodekat}${key}`
        )
          .then((respond) => {
            this.setState({ berita: respond.data.articles })
            console.log(this.state.berita)
          })
          .catch((error) => console.log(error))
    )
  }

  pilihanKat=()=>{
    let hasil=this.state.kategori.map((item,idx)=>{
      return(
        <NavDropdown.Item onClick={()=>{this.pilihKategori(idx)}}>{item.namKat}</NavDropdown.Item>
      )
    })
    return hasil
  }
  pilihan=()=>{
    let hasil=this.state.country.map((item,idx)=>{
        return(
          <NavDropdown.Item onClick={()=>{this.pilihanNegara(idx)}}>{item.negara}</NavDropdown.Item>
        )
    })
    return hasil
}
  componentDidMount() {
    Axios.get(
      "http://newsapi.org/v2/top-headlines?country=id&apiKey=82287471283f42bbadfb6c1d912d40ec"
    )
      .then((respond) => {
        this.setState({ berita: respond.data.articles });
        console.log(this.state.berita);
      })
      .catch((error) => console.log(error));
  }

  showNews = () => {
    let result = this.state.berita.map((item, idx) => {
      return (
        <Card style={{ width: "18rem",margin:"5px" }} key={idx} >
          <Card.Img variant="top" src={item.urlToImage} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Button variant="primary" href={item.url}>Read More</Button>
          </Card.Body>
        </Card>
      );
    });

    return result
  };

  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">NEWS</Navbar.Brand>
          <Nav className="mr-auto">
            <NavDropdown title="Country" id="basic-nav-dropdown">
              {this.pilihan()}
            </NavDropdown>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {this.pilihanKat()}
            </NavDropdown>
            </Nav>
         

        </Navbar>
        <div style={{display:"flex",flexWrap:"wrap"}} >
        {this.showNews()}
        </div>
      </div>
    );
  }
}

export default News;
