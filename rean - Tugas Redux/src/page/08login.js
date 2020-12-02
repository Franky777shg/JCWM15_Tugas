import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'

import {login} from '../action'
import {connect} from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: {}
        }
    }
    
    handleLogin = () => {
        let username = this.refs.username.value
        let password = this.refs.password.value
        
        if (!username && !password) return alert('Please input username & password')
        if (!username) return alert('Please input username')
        if (!password) return alert('Please input password')
        
        Axios.get(`http://localhost:2000/users2?username=${username}&password=${password}`)
        .then((res) => {
            console.log(res.data)
            if(res.data.length === 0) return alert('Invalid username or password')

            // this.setState({ users: res.data[0] }) // asd
            alert(`Login successful!\n\nUsername: "${this.refs.username.value}"\nPassword: "${this.refs.password.value}"`)
            this.props.login(res.data[0])
            localStorage.username = username
            this.refs.username.value = ''
            this.refs.password.value = ''
        })
        .catch((err) => console.log(err))
    }

    render() {
        console.log(this.state.users)
        if (this.props.username) return <Redirect to="/" />
        return (
            <div style={styles.container}>
                <h1>Login</h1>
                <Form.Control ref="username" style={styles.item} type="text" placeholder="Enter Username" />
                <Form.Control ref="password" style={styles.item} type="password" placeholder="Enter Password" />
                <Button variant="primary" onClick={this.handleLogin}>Login</Button>
            </div>
        )
    }
}

const styles = {
    container: {
        margin: "80px auto",
        height: "250px",
        width: "300px",
        backgroundColor: "lightgrey",
        padding: "10px",
        textAlign: "center",
        borderRadius: "15px"
    },
    item: {
        margin: "15px 0"
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps, {login})(Login)