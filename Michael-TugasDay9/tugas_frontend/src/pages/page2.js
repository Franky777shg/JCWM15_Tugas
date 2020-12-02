import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from "react-bootstrap"

class Page2 extends  React.Component {
    render () {
        return (
            <div>
                <center>
                <h1 id="page2" style={{color:'white', marginTop:'20px', marginBottom:'15px'}}>PAGE 2</h1>
                <Link to='/'><Button variant="secondary" style={{backgroundColor:'#3c6382'}}>Go home page</Button></Link>
                </center>
            </div>
        )
    }
}
export default Page2