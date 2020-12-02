import React from "react";
import Axios from "axios";

import { Form, Button } from "react-bootstrap";

import { Redirect } from 'react-router-dom'

import { connect } from "react-redux";

import { login } from "../action";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datausers: [],
    };
  }
  btnsubmit = (event) => {
    event.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    console.log(username, password);
    if (!username || !password) {
      return alert("INVALID");
    } else {
      Axios.get(
        `http://localhost:2000/datausers?username=${username}&password=${password}`
      )
        .then((res) => {
          if (res.data.length === 0) {
            return alert("Invalid Username or Password");
          } else {
            this.props.login(res.data[0]);
            // localStorage.setItem('username', username)
            localStorage.username = username;
            console.log(this.state.datausers);    
          }
        })
        .catch((err) => console.log(err));
    }
  };

  submit = (event) => {
    event.preventDefault();
  };

  render() {
    if (this.props.username) return <Redirect to='/' />
    return (
      
      <Form style={styles.form} onSubmit={this.submit}>
        <h1>LOGIN</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            ref="username"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref="password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.btnsubmit}>
          Submit
        </Button>
      </Form>
    );
  }
  
}

let styles = {
  form: {
    margin: "50px auto",
    width: "350px",
  },
}
const mapStateToProps = (state) => {
  return {
      username: state.user.username
  }
}

export default connect(mapStateToProps, { login })(Login);
