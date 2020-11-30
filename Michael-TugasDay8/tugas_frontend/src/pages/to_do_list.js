import React from "react"

class To_do_list extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: ["Makan", "Minum", "Tidur"],
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
  };

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
        {
          this.state.activity.map((item, index) => {
            return (
              <tr>
                <td id='list'>{item}</td>
                <td>
                  <button onClick={() => this.delHandle(index)} id='button2'>❌</button>
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