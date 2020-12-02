import React from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

class Register extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            login : []
        }
    }
    handleregister = () => {
        let username= this.refs.username.value
        let password= this.refs.password.value
        console.log(username,password)
        if (!username || !password) return alert('empty')
        Axios.get(`http://localhost:2000/login?username=${username}&password=${password}`)
        .then((res) => {
            if(res.data.length===0) return alert('invalid')
            this.props.login(res.data[0])
            localStorage.username = username
        })
        .catch((err) => console.log(err))
    }
    render () {
        if (this.props.username) return <Redirect to='/login'/>
        return (
            <div style={{margin:'80px auto', width:'300px', padding:'30px'}}>
                <h1>register page</h1>
                <Form.Control ref='username' type="email" placeholder="Enter username" />
                <Form.Control ref='password' type="password" placeholder="Enter password" />
                <Button variant="success" onClick={this.handleregister}>register</Button>
            </div>
        )
    }
}
export default Register