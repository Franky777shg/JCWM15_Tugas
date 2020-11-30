import React from 'react'
import {
   Carousel
} from 'react-bootstrap'

class Slide extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://tx-free-imgs.acfun.cn/Fnp8aU9KLYorvsrZEyAjzSqnJtrR?imageslim"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>First slide</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.statically.io/img/static.zerochan.net/Jump.Force.full.2394428.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Second slide</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images6.alphacoders.com/636/thumb-1920-636022.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Third slide</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default Slide