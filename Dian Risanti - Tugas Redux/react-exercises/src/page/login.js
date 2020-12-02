import React from 'react'
import Axios from 'axios'

import {
    Form,
    Button
} from 'react-bootstrap'

import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../action'

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    loginHandler = () => {
        let username = this.refs.username.value
        let password = this.refs.password.value

        if(!username || !password) return alert('Username/password isn\'t complete')

        Axios.get(`http://localhost:2000/login?username=${username}&password=${password}`)
        .then((res) => {
            if(res.data.length === 0) return alert('Invalid username or password') 

            this.props.login(res.data[0])
            localStorage.username = username
        })
        .catch((err) => console.log(err))
    }


    render() {
        if(this.props.username) return <Redirect to='/' />
        return(
            <div style={styles.container}>
                <h1>Login</h1>
                <Form.Control ref="username" style={styles.item} type="text" placeholder="Enter username"/>
                <Form.Control ref="password" style={styles.item} type="password" placeholder="Enter password"/>
                <Button variant="primary" onClick={this.loginHandler}>Login</Button>{' '}
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

const mapStateToProps = (state) => {
    return{
        username: state.user.username
    }
}

export default connect(mapStateToProps, {login})(Login)