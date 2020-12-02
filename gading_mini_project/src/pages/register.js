import Axios from 'axios'
import React, { Component } from 'react'

import { Col, Container, Form, Row, Button } from 'react-bootstrap'

import '../css/registerPage.css'

import {Redirect} from 'react-router-dom'

import swal from 'sweetalert';


export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            checkRegister: "Belum",
            dbAccount: ""
        }
    }


    handleRegister = () => {
        var usernameRegister = this.refs.usernameRegister.value;
        var emailRegister = this.refs.emailRegister.value;
        var passwordRegister = this.refs.passwordRegister.value;

        Axios.get('http://localhost:2000/account')
        .then((res) => {
            this.setState({
                ...this.props,
                dbAccount: res.data
            });

            let tempAccount = [... this.state.dbAccount]
            for(let i=0;i<tempAccount.length;i++){
                if(usernameRegister === tempAccount[i].username){
                    return swal("Ouch!", "Username is exist", "error");
                }
            }

            Axios.post('http://localhost:2000/account', {
                username: usernameRegister,
                email: emailRegister,
                password: passwordRegister
            })
            .then((res2) =>{
                swal("Good job!", "Register Telah Berhasil!", "success");
                
                this.setState({
                    ...this.props,
                    checkRegister: "Sudah"
                })
    
                this.refs.usernameRegister.value = "";
                this.refs.emailRegister.value = "";
                this.refs.passwordRegister.value = "";
            })
            .catch((err2) => {
                console.log(err2)
            })

        })
        .catch((err) => {
            console.log(err)
        })

    }
    
    render() {

        if(this.state.checkRegister === "Sudah")
        return <Redirect to='/login'/>

        return (
            <div>
                <Container fluid id="containerBone">
                    <Row>
                        <Col md={12} id="headerTitleRegisterLayout">
                            <p id="titleRegister">Register</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} id="layoutFormRegisterLayout">
                            <Form>
                                <Form.Control ref="usernameRegister" type="text" placeholder="Enter Username" style={{marginBottom: "5%", marginTop: "5%", color: "#F27E63"}} />
                                <Form.Control ref="emailRegister" type="email" placeholder="Enter Email" style={{marginBottom: "5%", marginTop: "5%", color: "#F27E63"}} />
                                <Form.Control ref="passwordRegister" type="text" placeholder="Enter Password" style={{marginBottom: "5%", color: "#F27E63"}} />
                                <Button id="buttonRegister" onClick={this.handleRegister}>REGISTER</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
