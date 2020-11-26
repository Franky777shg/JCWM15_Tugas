import React from 'react'
import {Carousel} from 'react-bootstrap'

class CarouselCustom extends React.Component{
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://media.cntraveler.com/photos/5c3f46c2a5c1d51f43a9d220/3:2/w_3999,h_2666,c_limit/Japan_Cherry-Blossoms_GettyImages-179989245.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://gilmour.com/wp-content/uploads/2018/03/growing-sunflowers.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.nationalgeographic.com/content/dam/travel/rights-exempt/2018-travel-photographer-of-the-year/magical-mountains/mountain-range-appenzell-switzerland.ngsversion.1527192465569.adapt.1900.1.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselCustom