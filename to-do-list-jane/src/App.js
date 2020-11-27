import React from 'react'
import Header from './components/header.js'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = { 
      kegiatan: ['Masak', 'Olahraga', 'Tidur']
    }
  }

  tambah = () => {
    let input = this.refs.aktifitas.value
    let tempList = [...this.state.kegiatan]
    tempList.push(input)
    this.setState({kegiatan: tempList})
  }

  hapus = () => {
    // let input = this.refs.aktifitas.value
    let tempHapus = [...this.state.kegiatan]
    // tempHapus.push(input)
    tempHapus.splice(0, 1)
    this.setState({kegiatan: tempHapus})
  }

  tampil = () => {
    const result = this.state.kegiatan.map((item, index) => <tr>
      <td key={item}>{item}</td>
      <td>
      <button onClick={this.hapus}>DELETE</button>
      </td>
    </tr>)
      return result
  }


  render () {
    return (
      <div className='divTabel'>
        <Header/>
        <input ref='aktifitas' placeholder='Input your schedule' type='text' className='inputList'/>
        <button onClick={this.tambah} className="btnAdd">ADD</button>

        <table className='tabelIsi'>
          <thead>
            <tr>
            <th>Activity</th>
            <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.tampil()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
