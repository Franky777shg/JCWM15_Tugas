import React from 'react'
import Axios from 'axios'
import { Form, Table, Button, InputGroup } from 'react-bootstrap'

class Data_table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dbUsers: [],
            selectedId: null,
            fnamesort: false,
            lnamesort: false,
            emailsort: false,
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
    tablehead = () => {
        let { fnamesort, lnamesort, emailsort } = this.state
        return (
            <thead>
                <tr style={{ color: 'white', backgroundColor: '#596275' }}>
                    <th>#</th>
                    <th>
                        First Name
                        <i
                            class={`fas fa-arrow-${fnamesort ? "down" : "up"}`}
                            onClick={() => this.Sort("first_name")}
                        ></i>
                    </th>
                    <th>
                        Last Name
                        <i
                            class={`fas fa-arrow-${lnamesort ? "down" : "up"}`}
                            onClick={() => this.Sort("last_name")}
                        ></i>
                    </th>
                    <th>
                        Email
                        <i
                            class={`fas fa-arrow-${emailsort ? "down" : "up"}`}
                            onClick={() => this.Sort("email")}
                        ></i>
                    </th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }
    tablebody = () => {
        return (
            <tbody>
                {this.state.dbUsers.map((item, index) => {
                    if (this.state.selectedID === item.id) {
                        return (
                            <tr key={item.id}>
                                <th>{index + 1}</th>
                                <td>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter First Name"
                                        ref="editFirstName"
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Last Name"
                                        ref="editLastName"
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        ref="editEmail"
                                    />
                                </td>
                                <td>
                                    <Button
                                        variant="success"
                                        onClick={() => this.handlesave(item.id)}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => this.handlecancel(item.id)}
                                    >
                                        Cancel
                                    </Button>
                                </td>
                            </tr>
                        );
                    } else {
                        return (
                            <tr key={item.id}>
                                <th>{index + 1}</th>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        onClick={() => this.handeledit(item.id)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => this.handledel(item.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    }
                })}
            </tbody>
        )
    }
    tableinput = () => {
        return (
            <tbody>
                <tr style={{ color: 'white', backgroundColor: '#b2bec3' }}>
                    <td>#</td>
                    <td>
                        <Form.Control type="text" placeholder="enter first name" ref="firstname" />
                    </td>
                    <td>
                        <Form.Control type="text" placeholder="enter last name" ref="lastname" />
                    </td>
                    <td>
                        <Form.Control type="text" placeholder="enter email" ref="email" />
                    </td>
                    <td>
                        <button onClick={this.handleadd}>Submit</button>
                    </td>
                </tr>
            </tbody>
        )
    }
    table = () => {
        return (
            <Table>
                {this.tablehead()}
                {this.tablebody()}
                {this.tableinput()}
            </Table>
        )
    }
    handleadd = () => {
        let first_name = this.refs.firstname.value
        let last_name = this.refs.lastname.value
        let email = this.refs.email.value
        Axios.post('http://localhost:2000/users', {
            first_name,
            last_name,
            email
        })
            .then((res) => {
                Axios.get('http://localhost:2000/users')
                console.log(res.data)
                this.refs.firstName.value = "";
                this.refs.lastName.value = "";
                this.refs.email.value = "";
            })
            .catch((err) => console.log(err))
    }
    handledel = (id) => {
        Axios.delete(`http://localhost:2000/users/${id}`)
            .then(res => {
                Axios.get('http://localhost:2000/users')
            })
            .catch(err => console.log(err)
            )
    }
    handeledit = (id) => {
        this.setState({ selectedID: id });
    };
    handlecancel = () => {
        this.setState({ selectedID: null });
    };
    handlesave = (id) => {
        var firstName = this.refs.editFirstName.value;
        var lastName = this.refs.editLastName.value;
        var email = this.refs.editEmail.value;
        Axios.put(`http://localhost:2000/users/${id}`, {
            id: id,
            first_name: firstName,
            last_name: lastName,
            email: email,
        })
            .then((res) => {
                Axios.get('http://localhost:2000/users')
                this.setState({ selectedID: null })
            })
            .catch((err) => console.log(err));
    };
    Search = (e) => {
        this.getData(`/users?q=${e.target.value}`)
    };

    Sort = (label) => {
        let { fnamesort, lnamesort, emailsort } = this.state;
        if (label === "first_name") {
            this.getData(`/users?_sort=${label}&_order=${fnamesort ? "desc" : "asc"}`)
            this.setState({ fnamesort: !fnamesort })
        } else if (label === "last_name") {
            this.getData(`/users?_sort=${label}&_order=${lnamesort ? "desc" : "asc"}`)
            this.setState({ lnamesort: !lnamesort })
        } else if (label === "email") {
            this.getData(`/users?_sort=${label}&_order=${emailsort ? "desc" : "asc"}`)
            this.setState({ emailsort: !emailsort })
        }
    };
    render() {
        console.log(this.state.dbUsers)
        return (
            <div>
                <InputGroup style={{ margin: "0 auto 20px", width: "50%" }}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <i class="fas fa-search" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => this.Search(e)}
                    />
                </InputGroup>
                {this.table()}
            </div>
        )
    }
}
export default Data_table