import React from 'react'
import {Link} from 'react-router-dom'

class Page2 extends  React.Component {
    render () {
        return (
            <div>
                <center>
                <h1>PAGE 2</h1>
                <Link to='/home'><button>Go to home page</button></Link>
                </center>
            </div>
        )
    }
}
export default Page2