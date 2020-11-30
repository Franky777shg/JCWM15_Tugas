import React from 'react'
import logo1 from './babyyoda.jpg'
import logo2 from './falcon.jpg'
import logo3 from './biohazard.jpg'

import {
    Carousel,
    // CarouselItem,
    // CarouselCaption,
} from 'react-bootstrap'

class Carousel1 extends React.Component {
    render() {
        return (
            <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "white"}}>Baby Yoda</h3>
                        <p style={{color: "white"}}>The Mandalorian</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{color: "black"}}>Millenium Falcon</h3>
                        <p style={{color: "black"}}>Millenium Falcon made the Kessel Run in less than 12 parsecs</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{color: "black"}}>Stay at Home</h3>
                        <p style={{color: "black"}}>Uncle Sam said so</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}

export default Carousel1