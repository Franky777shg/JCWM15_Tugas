import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render() {
        return(
            <div style={styles.container}>
                <h1>This is Home Page</h1>
                <Button variant="dark" style={{justifyContent: 'center'}}>
                    <Link to='/linkpage' style={{color: 'white'}}>To Link Page</Link>
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

export default Home