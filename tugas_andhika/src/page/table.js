import React from 'react'
import Axios from 'axios'
import {
    Button,
    Table 
}
 from 'react-bootstrap'

class Table extends React.Component {
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

    tableBody = () => {
        let {dbUsers} = this.state
        return (
            <tbody>
                {dbUsers.map((item, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    render() {
        return (
            <div>
                <h1>Table JSON</h1>
                {this.tableHead}
                {this.tableBody}
            </div>
        )
    }
}
export default Table