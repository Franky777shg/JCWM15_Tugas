import Axios from 'axios'
import React, { Component } from 'react'
import {
    Form,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap'

import {Redirect} from 'react-router-dom'

import '../css/loginPage.css'

import {login} from '../action'

import {connect} from 'react-redux'

 class Login extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    handleLogin = () => {
        let username = this.refs.username.value
        let password = this.refs.password.value

        if(!username || !password) return alert("Input the form first")

        console.log(username, password)
        Axios.get(`http://localhost:2000/account?username=${username}&password=${password}`)
        .then((res) => {
            if(res.data.length === 0) return alert('Invalid Username or Password')
            
            this.props.login(res.data[0])

            // Membuat Local Storage
            // localStorage.setItem('username', username)
            localStorage.username = username
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {

        //Redirect To Home
        if(this.props.username) return <Redirect to='/'/>

        return (
            <div>
                <Container fluid style={{padding: "5% 35%"}}>
                    <Row>
                        <Col id="headerLoginTitle" md={12}>
                            <h1>Login</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col id="formLoginLayout" md={12} >
                            <Form>
                                <Form.Control ref="username" type="text" placeholder="Enter Username" style={{marginBottom: "5%", marginTop: "5%", color: "#F27E63"}} />
                                <Form.Control ref="password" type="password" placeholder="Enter Password" style={{marginBottom: "5%", color: "#F27E63"}} />
                                <Button id="buttonLogin" onClick={this.handleLogin}>LOGIN</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        username: state.user.username
    }
} 

export default connect(mapStateToProps, {login})(Login)
