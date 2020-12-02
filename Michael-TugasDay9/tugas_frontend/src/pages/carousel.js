import React from 'react'
import { Carousel } from 'react-bootstrap'

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
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images5.alphacoders.com/854/thumb-1920-854773.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/43/0e/23/430e23ad72d0a87c3d49e19cbd97f76d.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default Slide