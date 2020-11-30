import React from 'react'

class Home extends React.Component {
    
    
    render(){
        return ( 
            <div>
                <h1 style={{fontSize: '30px'}} > This is Link Home</h1>
                <button onClick={this.klik}>To Home Page</button>
            </div>
        )
    }
}

export default Home
