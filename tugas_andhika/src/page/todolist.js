import React from 'react'


class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: ['makan', 'main'],
            del: 'hapus'
        }
    }
    renderTableHead = () => {
        return (
            <thead>
                <tr>
                    <th>activity</th>
                    <th>action</th>
                </tr>
            </thead>
        )
    }
    renderTableBody = () => {
        return (
            <tbody>
                {this.state.activity.map((item, index) => {
                    return (
                        <tr>
                            <td>{item}</td>
                            <td style={{ textAlign: "center" }}>
                                <button onClick={() => this.buttonDel(index)}>❌</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        );
    };


    buttonDel = (index) => {
        let tempActivity = [...this.state.activity]
        tempActivity.splice(index, 1)
        this.setState({ activity: tempActivity })
    }
    add = () => {
        let input = this.refs.activity.value
        let tempActivity = [...this.state.activity]
        tempActivity.push(input)
        this.setState({ activity: tempActivity })
        this.refs.activity.value = ""
    }
    render() {
        return (
            <div>
                <div>
                    <h1>To do list</h1>
                    <div>
                        <input ref='activity' placeholder='Add New Activitiy' type='text' />
                        <button onClick={this.add}>ADD</button>
                    </div>
                    <table>
                        {this.renderTableHead()}
                        {this.renderTableBody()}
                    </table>
                </div>
            </div>
        )
    }
}

export default TodoList