import React from 'react'

class App extends React.Component {
    
    render(){
        // let data = [
        //     {
        //         id : 1,
        //         activity : "makan"
        //     },
        //     {
        //         id : 2,
        //         activity : "minum"
        //     },
        //     {
        //         id : 3,
        //         activity : "tidur"
        //     }
        // ]
        // class formatdata {
        //     constructor (id, activity) {
        //         this.id = id,
        //         this.activity = activity
        //     }
        // }
        // function UsersData (index) {
        //     let table = document.getElementById("tabel")
        //     let tbody = table.getElementsByTagName("tbody")[0]
        //     let tr = ""
        //     for (let i = 0 ; i < data.length ; i++) {
        //         if (index === i) {
        //             tr += `
        //                 <tr>
        //                     <td> # </td>
        //                     <td> <input id = "editactivity" type = "text" value = "${data[i].activity}"> </td>
        //                     <td> 
        //                        <button onclick="buttonsave(${i})">SAVE</button>
        //                        <button onclick="buttoncancel(${i})">CANCEL</button>
                                
        //                     </td>
        //                 </tr>
        //             `
        //         } else {
        //             tr += `
        //                 <tr>
        //                     <td> ${i+1} </td>
        //                     <td> ${data[i].activity} </td>
        //                     <td> 
        //                         <button onclick="buttonedit(${i})">EDIT</button>
        //                         <button onclick="buttondelete(${i})">DELETE</button>
        //                     </td>
        //                 </tr>
        //             `
        //         }
        //     }
        //     tbody.innerHTML = tr
        // }
        // UsersData()
        // function buttonadd () {
        //     let input = document.getElementById("add")
        //     let activity = input["activity"].value
        
        //     if (activity==="") {
        //         alert("input masih kosong")
        //     } else {
        //         data.push( new formatdata(
        //             data.length+1,
        //             input["activity"].value
        //         ))
        //         UsersData()
        //         input["activity"].value = ""
        //     }
        // }
        // function buttonedit (index) {
        //     UsersData(index)
        // }
        
        // function buttondelete (index) {
        //     data.splice(index,1)
        //     UsersData()
        // }
        
        // function buttonsave (index) {
        //     let editactivity = document.getElementById("editactivity")
        //     data[index].activity = editactivity.value
        //     UsersData()
        // }
        
        // function buttoncancel() {
        //     UsersData()
        // }
        return (
            <div>
                <h1>To Do List</h1>
                <input  type="text" id="add" placeholder="input your schedule"></input>
                <button onclick="buttonadd()">Add</button>
                <table id="tabel">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th id="a">Activity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="body">
                        <tr>
                            <td>1</td>
                            <td id="a">Makan</td>
                            <td>
                                <button>❌</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td id="a">Minum</td>
                            <td>
                                <button>❌</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td id="a">Tidur</td>
                            <td>
                                <button>❌</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default App