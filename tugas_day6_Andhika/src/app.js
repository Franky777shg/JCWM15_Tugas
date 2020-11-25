import React from 'react'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activity : ['makan', 'main'],
            del : 'hapus'
        }
    }
    show = () => {
    const result = this.state.activity.map((item, index) => <li>{item} <button onClick={this.buttonDel(index)}>❌</button></li>)
    return result
    }

    buttonDel = (index) => {
        let tempActivity = [...this.state.activity]
        tempActivity.splice(index, 1)
        // this.setState({activity : tempActivity}) //Error
    }
    add = () => {
        let input = this.refs.activity.value
        let tempActivity = [...this.state.activity]
        tempActivity.push(input)
        this.setState({activity : tempActivity})
    }
    render() {
        return(
            <div>
                <h1>To do list</h1>
                <input ref='activity' placeholder='Add New Activitiy' type='text'/>
                <h1>
                    <ul>{this.show()}</ul>
                </h1>
                <button onClick={this.add}>ADD</button>
            </div>
        )
    }
}

export default App