import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import '../css/carouselpage.css'

import GambarCarousel1 from '../images/valorant_1.jpg'
import GambarCarousel2 from '../images/valorant_2.jpg'
import GambarCarousel3 from '../images/valorant_3.jpg'


export default class Carouselpage extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col md={12} id="layoutCarousel">
                            <Carousel>
                                <Carousel.Item interval={5000}>
                                    <img className="d-block w-100 sizeCarousel" src={GambarCarousel1} alt="First slide"/>
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img className="d-block w-100 sizeCarousel" src={GambarCarousel2} alt="Second slide"/>
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img className="d-block w-100 sizeCarousel" src={GambarCarousel3} alt="Third slide"/>
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                                
                        </Col>
                    </Row>
                    
                </Container>  
            </div>
        )
    }
}
