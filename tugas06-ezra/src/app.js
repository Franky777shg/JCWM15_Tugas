import React from 'react'

class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state =  {
    //         chores = ['dishes', 'mop the floor']
    //     }
    // }
    // show = () => {
    //     const result = this.state.chores.map((item, index) => <li key={index} >{item}</li>)
    //         return result
    //     }
    // add = () => {
    //     let input = this.refs.chores.value
    //     let tempChores = [...this.state.chores]
    //     tempChores.push(input)
    //     this.setState({ chores: tempChores})
    // }
    render () {
        let list = [
            {
                id:1,
                chores: 'nyapu',
            },
            {
                id:2,
                chores: 'ngepel',
            },
            {
                id:3,
                chores: 'nyuci motor',
            },
        ]
        class NewLists {
            constructor(id, chores) {
            this.id = id;
            this.chores = chores
            }
        }
        show = () => {
            const result = this.state.list.map(item, index);
            let tr = `
            <tr>
                <td>${id}</td>
                <td>${list[i].chores}</td>
            </tr>
            `
            return tr
        }
        // show = () => {
            //     const result = this.state.chores.map((item, index) => <li key={index} >{item}</li>)
            //         return result
            //     }
        return (
            <div style={{margin: 'auto'}, {backgroundColor: "lightblue"}}>
                <h1>To Do List</h1>
                <form id="list-baru">
                    <input ref='chores' placeholder='input your chores' type='text' />
                    <button onClick={this.add}>Add Chores</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Nu</th>
                            <th>Chores</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">{this.show()}</tbody>
                </table>
                </div>
        )
    }
}

export default App