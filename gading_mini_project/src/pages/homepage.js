import React, { Component } from 'react'



//#region Bootstrap

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//#endregion

import {Link} from 'react-router-dom'




import '../css/homepage.css'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                
                <Container fluid>
                    <Row id="layoutTitle">
                        <Col md={12}>
                            <Row>
                                <Col md={12} id="titleParagraphLayout">
                                    <h4 id="titleParagraph">This Is Home Page</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Link to="/linkpage">
                                        <Button variant="primary" id="buttonToLinkPage">To Link Page</Button>{' '}    
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            
            </div>
        )
    }
}
