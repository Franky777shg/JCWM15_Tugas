import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class LinkPage extends React.Component{
    render() {
        return(
            <div style={styles.container}>
                <h1>This is Link Page</h1>
                <Button variant="dark">
                    <Link to='/' style={{color: 'white'}}>To Home Page</Link>    
                </Button>{' '}
            </div>
        )
    }
}

const styles = {
    container: {
        margin: "auto",
        width: "30%",
        alignItems: "center"
    }
}

export default LinkPage