import React from 'react'
import Acitivity from './component/activity'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aktivitas: ['sholat', 'mandi', 'coding']
        }
    }

    tampilkan = () => {
        let result = this.state.aktivitas.map((item, index) => {
            return <Acitivity content={item} key={index} id={index} onDelete={this.props.onDelete}/>
        })
        return result   
    }

    buttonAdd = () => {
        let input = this.refs.todo.value
        let tempToDo = [...this.state.aktivitas]
        tempToDo.push(input)
        this.setState({aktivitas: tempToDo})
    }

    buttonDelete = (index) => {
        let newToDo = [...this.state.aktivitas]
        newToDo.splice(index, 1)
        this.setState({aktivitas: newToDo})
    }

    render() {
        return(
            <div className='wrapper' id='container'>
                <div className='card-frame'>
                    <h1>My To Do List</h1>
                </div>
                <div className='list-wrapper'>
                    {this.tampilkan()}
                </div>
                <div id='ask-input'>
                    <input type='text' ref='todo' placeholder='add new activity' className='input'></input>
                    <button onClick={this.buttonAdd}>ADD</button>
                </div>
            </div>
        )
    }
}

export default App