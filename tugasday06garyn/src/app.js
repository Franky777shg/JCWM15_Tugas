import React from 'react'

// import Header from './component/header'
// import Footer from './component/footer'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todolist: ['Ibadah', 'belanja ke warung', 'Masak'],
        }
    }


    
    tambah = () => {
        let input = this.refs.aktivitas.value
        let tempTodolist = [... this.state.todolist]
        tempTodolist.push(input)
        this.setState({ todolist: tempTodolist })
    }

    hapus = () => {
        this.state.todolist.splice(0,1)
    } 
 
    show = () => {
        const result = this.state.todolist.map((item, index) => <tr>
          <td key={item}>{item}</td>
          <td>
          <button onClick={this.hapus}>X</button>
          </td>
        </tr>)
          return result
      }
  
    render() {
      
        return (
         
            <div style={{ marginLeft: '500px' }}>
                
                <h1>To Do List Exercise</h1>
                <input ref='aktivitas' placeholder='masukan aktivitas' type='text' />  
                <button onClick={this.tambah}>Add Act</button> 
                <br></br>
                <br></br>
                <table >
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.show()}
                    </tbody>
                </table>


                                
            </div>
        )
    }
}

export default App