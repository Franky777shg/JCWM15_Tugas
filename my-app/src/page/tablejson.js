import React from 'react'
import Axios from 'axios'
import {
    Table,
    Button,
    Form
} from 'react-bootstrap'

class Json extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dbUsers: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/users')
            .then((res) => {
                console.log(res.data)
                this.setState({ dbUsers: res.data })
            })
            .catch((err) => console.log(err))
    }

    tableHead = () => {
        return (
            <thead>
                <tr>
                    <th>#</th>
                    <th>First_Name</th>
                    <th>Last_Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    tableBody = (id) => {
        let { dbUsers } = this.state
        return (
            <tbody>
                {dbUsers.map((item, index) => {
                  // console.log("item=",item.id)
                  if(item.id===id){
                    console.log(true)
                    return (
                      <tr key={index}>
                          <td>{index + 1}</td>
                          <td><Form.Control type="text" placeholder="Enter First Name" ref="a" /></td>
                          <td><Form.Control type="text" placeholder="Enter Last Name" ref="b" /></td>
                          <td><Form.Control type="email" placeholder="Enter Email" ref="c" /></td>
                          <td>
                              <Button>Save</Button>
                              <Button>Cancel</Button>
                          </td>
                      </tr>
                  )
                  }else{
                    console.log(false)
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Button onClick={()=>this.buttonedit(item.id)}>Edit</Button>
                                <Button onClick={()=>this.buttondelete(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                  }
                })}
            </tbody>
        )
    }

    tableInput = () => {
        return (
            <tbody>
                <tr>
                    <td>#</td>
                    <td>
                        <Form.Control type="text" placeholder="Enter First Name" ref="firstname" />
                    </td>
                    <td>
                        <Form.Control type="text" placeholder="Enter Last Name" ref="lastname" />
                    </td>
                    <td>
                        <Form.Control type="text" placeholder="Enter Email" ref="email" />
                    </td>
                    <td>
                        <Button onClick={this.handleAdd} >SUBMIT</Button>
                    </td>
                </tr>
            </tbody>
        )
    }

    table = () => {
        return(
            <Table>
                {this.tableHead()}
                {this.tableBody()}
                {this.tableInput()}
            </Table>
        )
    }

    handleAdd = () => {
        let first_name = this.refs.firstname.value
        let last_name = this.refs.lastname.value
        let email = this.refs.email.value
        console.log(first_name, last_name, email)
        Axios.post('http://localhost:2000/users', {
            first_name,
            last_name,
            email
        })
        .then((res) => {
            console.log(res.data)
            Axios.get('http://localhost:2000/users')
            .then((res) => {
                console.log(res.data)
                this.setState({ dbUsers: res.data })
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    }
    buttondelete = (id) => {
      console.log(id)
    return Axios.delete(`http://localhost:2000/users/${id}/`)
      .then((res) => {
        Axios.get('http://localhost:2000/users')
        .then((res) => {
            console.log(res.data)
            this.setState({ dbUsers: res.data })
        })
        .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }

  buttonedit=(id)=>{
    console.log("id ke=",id)
    return this.tableBody(id)
  }

    render() {
        console.log(this.state.dbUsers)
        console.log(this)
        return (
            <div>
                <h1>Table JSON</h1>
                
                {this.table()}
            </div>
        )
    }
}
export default Json;
