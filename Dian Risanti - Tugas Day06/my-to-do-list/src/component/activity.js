/* eslint-disable no-unused-vars */
import React from 'react'

class Activity extends React.Component {
    render() {
        return(
            <div className='list-item'>
                {this.props.content}
                <button onClick={() => {this.props.onDelete(props.id)}}>❌</button>
            </div>
        )
    }
}

export default Activity