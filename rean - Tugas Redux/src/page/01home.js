import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class Home extends React.Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>This is Home Page</h1>
                <Link to="/link"><Button variant="primary">To Link Page</Button></Link>
            </div>
        )
    }
}

export default Home