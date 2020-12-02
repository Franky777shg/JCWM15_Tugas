import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import '../css/counter.css'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux';


import { tambah } from '../action/counterAction'

import { kurang } from '../action/counterAction'



 class Counter extends Component {

    // increment = () => {
    //     return this.props.tambah
    // }

    // decrement = () => {
    //     return this.props.kurang
    // }

    render() {
        return (
            <div>
                <Container fluid id="boneLayoutCounter">
                    <Row className="layoutCounter">
                        <Col md={12} id="layoutNumberCounter">
                            <p id="numberCounter">{this.props.count}</p>
                        </Col>
                    </Row>
                    <Row className="layoutCounter">
                        <Col md={6} className="layoutButtonCounter">
                            <Button className="buttonCounter" onClick={this.props.handleTambah}>+</Button>
                        </Col>
                        <Col md={6} className="layoutButtonCounter">
                            <Button className="buttonCounter" onClick={this.props.handleKurang}>-</Button>
                        </Col>
                    </Row>
                </Container>    
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        count: state.counterReducer.count
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        handleTambah: tambah,
        handleKurang: kurang,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
