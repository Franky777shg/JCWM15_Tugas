import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render(){
        return(
            <div>
                <h1>This is HomePage</h1>
                <Link to ='/LinkPage'>
                    <Button>To Link Page</Button>
                </Link>
            </div>
        )
    }
}
export default Home