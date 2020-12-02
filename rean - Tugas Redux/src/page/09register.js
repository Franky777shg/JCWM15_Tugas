import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: null
        }
    }
    
    handleRegister = () => {
        let username = this.refs.username.value
        let password = this.refs.password.value

        if (!username && !password) return alert('Please input username & password')
        if (!username) return alert('Please input username')
        if (!password) return alert('Please input password')

        Axios.post('http://localhost:2000/users2', {
            username,
            password
        })
        alert(`Register successful!\n\nUsername: "${this.refs.username.value}"\nPassword: "${this.refs.password.value}"\n\nLogin to access your account`)

        Axios.get('http://localhost:2000/users2')
        .then((res) => {
            console.log(res.data)
            this.setState({ users: res.data })
        })
        .catch((err) => console.log(err))
    }

    render() {
        if(this.state.users) return <Redirect to='/login' />
        console.log(this.state.users)
        return (
            <div style={styles.container}>
                <h1>Register</h1>
                <Form.Control ref="username" style={styles.item} type="text" placeholder="Enter Username" />
                <Form.Control ref="password" style={styles.item} type="password" placeholder="Enter Password" />
                <Button variant="primary" onClick={this.handleRegister}>Register</Button>
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

export default Register