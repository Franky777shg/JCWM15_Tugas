import React from 'react'
import Axios from 'axios'

import {
    Form,
    Button
} from 'react-bootstrap'

import {Redirect} from 'react-router-dom'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newuser: null
        }
    }

    registerHandler = () => {
        let username = this.refs.username.value
        let email = this.refs.email.value
        let password = this.refs.password.value

        if (!username || !email || !password) return alert('Input isn\'t complete')

        Axios.post('http://localhost:2000/login', {
            username,
            email,
            password
        })
        .then((res) => {
            this.setState({newuser: res.data})
        })
        .catch((err) => console.log(err))
    }

    render(){
        if(this.state.newuser) return <Redirect to='/login' />
        return(
            <div style={styles.container}>
                <h1>Register</h1>
                <Form.Control ref="username" style={styles.item} type="text" placeholder="Enter username"/>
                <Form.Control ref="email" style={styles.item} type="text" placeholder="Enter email"/>
                <Form.Control ref="password" style={styles.item} type="password" placeholder="Enter password"/>
                <Button variant="primary" onClick={this.registerHandler}>Register</Button>{' '}
            </div>
        )
    }
}

const styles = {
    container: {
        margin: '100px auto',
        padding: '10px',
        width: '20%',
        height: 'fit-content',
        backgroundColor: 'lightblue',
        borderRadius: '15px'
    },
    item: {
        margin: '15px 0'
    }
}

export default Register