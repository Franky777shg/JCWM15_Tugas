import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from "react-bootstrap"

class Home extends  React.Component {
    render () {
        return (
            <div>
                <center>
                <h1 id="home" style={{color:'white', marginTop:'20px', marginBottom:'15px'}}>HOME PAGE</h1>
                <Link to='/page2'><Button variant="secondary">Go to page 2</Button></Link>
                </center>
            </div>
        )
    }
}
export default Home