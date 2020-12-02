import React from 'react'

class Todolist extends React.Component {
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
                    <td style={styles.border}>
                        <input type="text" value={item}></input>
                    </td>
                    <td style={styles.border}>
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.cancel}>Cancel</button>
                    </td>
                </tr>
            )
            return result
        } else {
            let result = this.state.toDoList.map((item, index) =>
                <tr>
                    <td style={styles.border} key={index}>{item}</td>
                    <td style={styles.border}>
                        <button onClick={() => this.delete(index)}>Delete</button>
                        <button onClick={() => this.edit(index)}>Edit</button>
                    </td>
                </tr>
            )
            return result
        }
    }

    add = () => {
        let input = this.refs.act.value
        let newArr = [... this.state.toDoList]
        newArr.push(input)
        this.setState({toDoList: newArr})
        this.refs.act.value = ""
    }
    delete = (index) => {
        let newArr = [... this.state.toDoList]
        newArr.splice(index, 1)
        this.setState({toDoList: newArr})
    }
    edit = (idx) => {
        this.setState({ id: idx.id })
    }
    save = (idx) => {
        this.setState({ id: idx.id })
    }
    cancel = () => {
        {this.showList()}
    }

    render() {
        return (
            <div style={styles.container}>
                <h1>To Do List Exercise</h1>
                <div>
                    <input ref='act' type='text' placeholder='Input activity' style={{marginBottom: "20px"}} />
                    <button onClick={this.add}>Add</button>
                </div>
                <div>
                    <table style={styles.border, {width: "500px"}}>
                        <thead>
                            <tr>
                                <th style={styles.border}>Activity</th>
                                <th style={styles.border}>Action</th>
                            </tr>
                        </thead>
                        <tbody>{this.showList()}</tbody>
                    </table>
                </div>
            </div>
        )
    }

}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    color: {
        color: "red"
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    column: {
        display: "flex",
        flexDirection: "column"
    },
    border: {
        border: "1px solid black",
        borderCollapse: "collapse",
    }
}

export default Todolist
