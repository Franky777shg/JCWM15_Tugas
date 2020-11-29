
import React from "react"
import {Button} from "react-bootstrap"

import {Link} from "react-router-dom"

class link extends React.Component{
    render(){
        return (
            <div className="link">
                <h1>THIS IS LINK PAGE</h1>
                    <Link to='/'  >
                <Button variant="secondary" size="md" >
                To Home
                </Button>
                        </Link>

            </div>
        )
    }
}

export default link