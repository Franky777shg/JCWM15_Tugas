import React from 'react'
import './practice.css'

class TodoList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            aktivitas: ['sholat', 'mandi', 'coding']
        }
    }

    buttonAdd = () => {
        let input = this.refs.todo.value
        let tempToDo = [...this.state.aktivitas]
        tempToDo.push(input)
        this.setState({aktivitas: tempToDo})
        this.refs.todo.value = ""
    }

    buttonDelete = (id) => {
        let newToDo = [...this.state.aktivitas]
        newToDo.splice(id, 1)
        this.setState({aktivitas: newToDo})
    }

    renderThead = () => {
        return(
            <thead style={{textAlign: 'center'}}>
                <th>Activity</th>
                <th>Action</th>
            </thead>
        )
    }

    renderTbody = () => {
        return(
            <tbody>
                {this.state.aktivitas.map ((item, index) => {
                    return(
                        <tr>
                            <td key={index}>{item}</td>
                            <td style={{textAlign: 'center'}}>
                                <button onClick={() => this.buttonDelete(index)}>❌</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }
    render() {
        return(
            <div className='container'>
                <div className='title'>
                    <h1>My To Do List</h1>
                </div>
                <div className='table'>
                    <table>
                        {this.renderThead()}
                        {this.renderTbody()}
                    </table>
                </div>
                <div className='ask-input'>
                    <input type='text' ref='todo' placeholder='add new activity' className='input'></input>
                    <button onClick={this.buttonAdd} className='add-btn'>ADD</button>
                </div>
            </div>
        )
    }
}

export default TodoList