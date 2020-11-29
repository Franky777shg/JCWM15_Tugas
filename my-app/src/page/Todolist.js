
import './Todolist.css';
import React from 'react';

class Todolist extends React.Component{
  constructor(props){
    super(props)
    this.state={
      do:[]
    }
  }


  show=()=>{
    let result= this.state.do.map(
      (item,index)=>
      <tr key={index}>
        <td key={index}>{item}</td>
        <td><button onClick={()=>{this.delete(index)}}>DELETE</button></td>
      </tr>
      )

      return result
  }
  add=()=>{
    let input=this.refs.inputan.value
    let tempdo=[...this.state.do]
    if(input!==""){
      tempdo.push(input)
    this.setState({do:tempdo})
    }else{
      alert("INPUTAN KOSONG")
    }
    
    this.refs.inputan.value=""  
  }

  delete=(idx)=>{
    let tempdo=[...this.state.do]
    tempdo.splice(idx,1)
    this.setState({do:tempdo})
  }

 
  render(){
    return(
      <div className="utama">
      <div className="main">
      <input type="text" ref="inputan" placeholder="masukan kegiatan"/>
      <button onClick={this.add}>ADD</button>
        <table>
          <thead>
            <tr>
              <th>To Do</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.show()}
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}

export default Todolist;
