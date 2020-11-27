import React from 'react'
import '../src/css/tugasDay07.css'

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      aktifitas: ['Belanja ke warung','Jalan-jalan']
    }
  }


  //#region Function
  showData = () =>{
    let result = this.state.aktifitas.map(
      (item, index) => 
        <tr>
          <td key={index}>
            {item}
          </td>
          <td>
             <button className='buttonDelete' onClick={this.deleteData}>Delete</button>
          </td>
        </tr>
      )
      
      return result
  }

  addData = () =>{
    let input = this.refs.aktifitas.value
    let tempActivity = [... this.state.aktifitas]
    tempActivity.push(input)
    this.setState({aktifitas: tempActivity})
  }

  deleteData = (index) =>{
    let tempActivity = [... this.state.aktifitas]
    tempActivity.splice(index, 1)
    this.setState({aktifitas: tempActivity})
  }

  //#endregion




  render() {
    return (
      <div className='rowLayout'>
        <div className='cardLayout'>
          <h1 className='titleProperty'>To Do List Exercise</h1>
          <div className="fieldLayout">
            <input ref='aktifitas' placeholder='Input Aktivitas' type='text' className='inputAktifitas'/>
            <button className='buttonTambah' onClick={this.addData}>Tambah Aktivitas</button>
          </div>
          <div className="tableLayout">
            <table className='tableAktifitas'>
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.showData()}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    )
  }
}

