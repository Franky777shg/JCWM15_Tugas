import React from 'react'
import Axios from 'axios'
import { Button } from 'react-bootstrap'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dbUsers: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000')
            .then((res) => {
                console.log(res.data)
                this.setState({ dbUsers: res.data })
            })
            .catch((err) => console.log(err))
    }

    HandlePost = () => {
        Axios.post('http://localhost:2000/users', {
            first_name: 'Randy',
            last_name: 'Anto',
            email: 'freddyb34@gmail.com'
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }

    HandleDelete = () => {
        Axios.delete('http://localhost:2000/users/2')
        .then((res) => console.log (res.data))
        .catch((err) => console.log(err))
    }

    HandleEdit = () => {
        Axios.put('http://localhost:2000/users/4',{
            first_name: 'Gavriel',
            last_name: 'Blair',
            email: 'gavrielb34@gmail.com'
        })
        .then((res) => console.log (res.data))
        .catch((err) => console.log(err))
    }


    render() {
        console.log(this.state.dbUsers)
        return (
            <div>
                <h1>Hello J-SON</h1>
                <Button onClick={this.HandlePost}>POST</Button>
                <Button onClick={this.HandleDelete}>DELETE</Button>
                <Button onClick={this.HandleEdit}>EDIT</Button>
            </div>
        )
    }
}

export default App

// untuk mengubah object menjadi JSON memakai =JSON.stringify(nama/var object yg mau di ubah)
// sebaliknya dari JSON ke object memakai =JSON.parse(nama/var object yg mau di ubah)
// params(/3) mendapatkan yg dituju
// query(?) array of object