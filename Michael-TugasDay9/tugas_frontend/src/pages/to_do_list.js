import React from "react"

class To_do_list extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: ["Makan", "Minum", "Tidur"],
      selectedID: null
    }
  }

  renderList = () => {
    return this.state.activity.map((item) => {
      return (
        <div>
          <p>{item}</p>
        </div>
      )
    })
  }

  addHandle = () => {
    let add = this.refs.act.value;
    let newArr = [...this.state.activity]
    newArr.push(add);
    this.setState({ activity: newArr })
    this.refs.act.value = ""
  }

  delHandle = (index) => {
    let newArr = [...this.state.activity]
    newArr.splice(index, 1)
    this.setState({ activity: newArr })
  }

  editHandle = (index) => {
    this.setState({selectedID: index})
  }

  saveHandle = (index) => {
    let newAct = this.refs.editact.value
    let arr = [...this.state.activity]
    arr.splice(index, 1, newAct)
    this.setState({activity: arr, selectedID: null})
  }

  cancelHandle = () => {
    this.setState({selectedID: null})
  }

  renderTHead = () => {
    return (
      <thead>
        <tr>
          <th id='satu'>Activity</th>
          <th id='dua'>Action</th>
        </tr>
      </thead>
    )
  }

  renderTBody = () => {
    return (
      <tbody>
        {this.state.activity.map((item, index) => {
          if (this.state.selectedID === index) {
            return (
              <tr>
                <td>
                  <input type="text" ref="editact" placeholder="input your schedule"/>
                </td>
                <td>
                  <button onClick={() => this.saveHandle(index)}>✔</button>
                  <button onClick={() => this.cancelHandle(index)}>❌</button>
                </td>
              </tr>
            )
          }
            return (
              <tr>
                <td id='list'>{item}</td>
                <td>
                  <button onClick={() => this.editHandle(index)} id='button2'>Edit</button>
                  <button onClick={() => this.delHandle(index)} id='button2'>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    )
  }

  render() {
    return (
      <div >
        <div id='all'>
          <h1>To Do List</h1>
          <div>
            <input type="text" ref="act" placeholder="input your schedule"/>
            <button onClick={this.addHandle} id='button1'>Add</button>
          </div>
          <table>
            {this.renderTHead()}
            {this.renderTBody()}
          </table>
        </div>
      </div>
    );
  }
}
export default To_do_list