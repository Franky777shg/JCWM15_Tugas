import React from "react";

import { Form, Button } from "react-bootstrap";

import {Redirect} from "react-router-dom"

import Axios from "axios"

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state={
            login:false
        }
    }
    btnRegister=()=>{
        let username=this.refs.username.value 
        let email=this.refs.email.value 
        let password=this.refs.password.value 

      if(!username||!email||!password) return alert("INPUT HARUS DI ISI")
      Axios.get("http://localhost:2000/datausers",{username:{username}})
      .then((res)=>{
          if(res.data.length===0)return alert("USERNAME SUDAH  ADA")
          Axios.post("http://localhost:2000/datausers",{username,email,password})
          .then((res)=>{
              this.setState({ login: true })
              console.log(res)
          })
          .catch((err)=>console.log(err))

      })
      .catch((err)=>console.log(err))
    }
  render() {
    if (this.state.login===true) return <Redirect to='/login' />
    return (
      <Form style={styles.form}>
          <h1>REGISTER FORM</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter username" ref="username" />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref="email" />
         
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref="password" />
        </Form.Group>
        
        <Button variant="primary" onClick={this.btnRegister}>Register</Button>
      </Form>
    );
  }
}

let styles={
    form:{
        width:"400px",
        margin: "50px auto"
    }
}
export default Register;
