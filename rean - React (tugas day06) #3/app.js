import React from 'react';
import './app.css'; 

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            toDoList: ['Coding', 'Coding lagi'],
            id: [0, 1]
        }
    }

    showList = (idx) => {
        if (idx === this.state.id) {
            let result = this.state.toDoList.map((item, index) =>
                <tr>
                    <td>
                        <input type="text" value={item}></input>
                    </td>
                    <td>
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.cancel}>Cancel</button>
                    </td>
                </tr>
            )
            return result
        } else {
            let result = this.state.toDoList.map((item, index) =>
                <tr>
                    <td key={index}>{item}</td>
                    <td>
                        <button onClick={this.delete}>Delete</button>
                        <button onClick={this.edit}>Edit</button>
                    </td>
                </tr>
            )
            return result
        }
    }


    add = () => {
        let input = this.refs.toDoList.value
        let tempActivity = [... this.state.toDoList]
        tempActivity.push(input)
        this.setState({toDoList: tempActivity})
    }
    delete = (index) => {
        let tempActivity = [... this.state.toDoList]
        tempActivity.splice(index, 1)
        this.setState({toDoList: tempActivity})
    }
    edit = (idx) => {
        this.setState({ id: idx.id });
    }
    save = (idx) => {
        this.setState({ id: idx.id });
    }
    cancel = () => {
        {this.showList()}
    }

    render() {
        return (
            <div className="container">
                <h1>To Do List Exercise</h1>
                <input ref='toDoList' type='text' placeholder='Input activity' style={{marginBottom: "20px"}} />
                <button onClick={this.add}>Add</button>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Activity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{this.showList()}</tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default App;