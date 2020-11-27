import React from 'react'
import Home from './home'
import {Link} from 'react-router-dom'

import {
    Button
} from 'react-bootstrap'

class Linkpage extends React.Component {
    render () {
        return (
            <div style={style.container}>
                <h1>This is Link Page</h1>
                <div>
                    <Link to='/home'>
                        <Button variant="primary">To Home Page</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

const style = {
    container: {
        margin: " 80px auto",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Linkpage