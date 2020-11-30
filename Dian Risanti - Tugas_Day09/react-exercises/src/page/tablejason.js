import React from 'react'
import Axios from 'axios'
import {
    Table,
    Button,
    Form
} from 'react-bootstrap'

class TableJSON extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dbUsers: [],
            editId: null
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/users')
        .then((res) => {
            this.setState({dbUsers: res.data})
        })
        .catch((err) => console.log(err))
    }

    tableHead = () => {
        return(
            <thead style={{textAlign: "center"}}>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    tableBody = () => {
        let {dbUsers} = this.state
        const style = {
            margin: "5px"
        }

        return(
            <tbody>
                {dbUsers.map((item, index) => {
                    if(this.state.editId === index) {
                        return(
                            <tr key={index}>
                                <td>#</td>
                                <td>
                                    <Form.Control type="text" placeholder="First name" ref="edit_first_name" />
                                </td>
                                <td>
                                    <Form.Control type="text" placeholder="Last name" ref="edit_last_name" />
                                </td>
                                <td>
                                    <Form.Control type="email" placeholder="Enter email" ref="edit_email"/>
                                </td>
                                <td>
                                    <Button onClick={() => this.saveHandler(index)} style={style}>SAVE</Button>
                                    <Button onClick={() => this.cancelHandler(index)} style={style}>CANCEL</Button>
                                </td>
                            </tr>
                        )
                    } else {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Button onClick={() => this.editHandler(index)} style={style}>EDIT</Button>
                                    <Button onClick={() => this.deleteHandler(index)} style={style}>DELETE</Button>
                                </td>
                            </tr>
                        )
                    }
                })}
            </tbody>
        )
    }

    table = () => {
        const style = {
            width: "80%",
            marginLeft: "10%"
        }

        return(
                <Table style={style}>
                    {this.tableHead()}
                    {this.tableBody()}
                    {this.tableInput()}
                </Table>
        )
    }

    tableInput = () => {
        return(
            <tbody>
                <tr>
                    <td>#</td>
                    <td>
                        <Form.Control type="text" placeholder="First name" ref="first_name" />
                    </td>
                    <td>
                        <Form.Control type="text" placeholder="Last name" ref="last_name" />
                    </td>
                    <td>
                        <Form.Control type="email" placeholder="Enter email" ref="email"/>
                    </td>
                    <td>
                        <Button onClick={this.addHandler}>SUBMIT</Button>
                    </td>
                </tr>
            </tbody>
        )
    }

    addHandler = () => {
        let first_name = this.refs.first_name.value
        let last_name = this.refs.last_name.value
        let email = this.refs.email.value
        
        Axios.post('http://localhost:2000/users', {
            first_name,
            last_name,
            email
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))

        Axios.get('http://localhost:2000/users')
        .then((res) => {
            this.setState({dbUsers: res.data})
        })
        .catch((err) => console.log(err))
    }

    editHandler = (index) => {
        this.setState({editId: index})
        this.tableBody()
    }

    deleteHandler = (index) => {
        let id = index+1
        Axios.delete(`http://localhost:2000/users/${id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))

        Axios.get('http://localhost:2000/users')
        .then((res) => {
            this.setState({dbUsers: res.data})
        })
        .catch((err) => console.log(err))
    }

    saveHandler = (index) => {
        let first_name = this.refs.edit_first_name.value
        let last_name = this.refs.edit_last_name.value
        let email = this.refs.edit_email.value

        let id = index + 1
        Axios.put(`http://localhost:2000/users/${id}`, {
            first_name,
            last_name,
            email
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))

        Axios.get('http://localhost:2000/users')
        .then((res) => {
            this.setState({dbUsers: res.data})
        })
        .catch((err) => console.log(err)) 
    }

    cancelHandler = () => {this.table()}

    render() {
        return(
            <div>
                <h1 style={{marginLeft: "40%", marginBottom:"2%"}}>Table JSON</h1>
                {this.table()}
            </div>
        )
    }
}

export default TableJSON