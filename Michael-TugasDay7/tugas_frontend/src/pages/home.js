import React from 'react'
import {Link} from 'react-router-dom'

class Home extends  React.Component {
    render () {
        return (
            <div>
                <center>
                <h1>HOME PAGE</h1>
                <Link to='/page2'><button>Go to page 2</button></Link>
                </center>
            </div>
        )
    }
}
export default Home