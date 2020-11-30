import React from 'react'
import {Link} from 'react-router-dom'

import {
    Button,
} from 'react-bootstrap'

class Home extends React.Component {
    render () {
        return (
            <div style={style.container}>
                <h1>This is Home Page</h1>
                <div>
                    <Button variant="primary">
                        <Link to="/linkpage" style={{textDecoration: 'none', color: 'white'}}>To Link Page</Link>
                    </Button>
                {/* <Button variant="primary">To Link Page</Button>{' '} */}
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

export default Home