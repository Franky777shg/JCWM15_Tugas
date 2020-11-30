import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class LinkPage extends React.Component {
    render(){
        return(
            <div>
                <h1>This is LinkPage</h1>
                <Link to ='/'>
                    <Button> To Home Page</Button>
                </Link>
            </div>
        )
    }
}
export default LinkPage