import React from 'react'
import {Carousel} from 'react-bootstrap'

class Karousel extends React.Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/170249.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Landscape 1</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Landscape 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/23618.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Landscape 3</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        )
    }
}

export default Karousel