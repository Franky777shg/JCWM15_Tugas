import React from 'react'

class Todolist extends React.Component {
    constructor (props) {
        super (props)
        this.state = { 
          kegiatan: ['Masak', 'Olahraga', 'Tidur']
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
    
      renderThead = () => {
        return (
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>Activity</th>
              <th>Action</th>
            </tr>
          </thead>
        )
      }

      renderTbody = () => {
        return (
          <tbody>
            {this.state.kegiatan.map((item, index) => {
            return (
                <tr>
                <td>{item}</td>
                <td style={{ textAlign: "center" }}>
                    <button onClick={() => this.hapus(index)}>❌</button>
                </td>
                </tr>
                )
              })
            }
          </tbody>
        )
      }

      tambah = () => {
        let input = this.refs.aktifitas.value
        let tempList = [...this.state.kegiatan]
        tempList.push(input)
        this.setState({kegiatan: tempList})
      }
    
      hapus = (index) => {
        let tempList = [...this.state.kegiatan]
        tempList.splice(index, 1)
        this.setState({kegiatan: tempList})
      }
    
    
    render () {
        return (
            <div style={style.container}>
            <h1>To Do List Exercise</h1>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column'}}>
                <input ref='aktifitas' placeholder='Input your schedule' type='text' className='inputList'
                style={{ height: '30px', width: '250px' }}/>
                <button onClick={this.tambah} className="btnAdd" style={{ height: '30px', width: '60px' }}>ADD</button>

            <table className='tabelIsi'>
                {this.renderThead()}
                {this.renderTbody()}
            </table>
        </div>
      </div>
        )
    }
}

const style = {
    container: {
      margin: " 80px auto",
      backgroundColor: "salmon",
      width: "30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1%",
      borderRadius: "20px",
    },
  };

export default Todolist