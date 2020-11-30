import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class Linkpage extends React.Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>This is Link Page</h1>
                <Link to="/"><Button variant="primary">To Home Page</Button></Link>
            </div>
        )
    }
}

export default Linkpage