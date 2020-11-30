import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: 'orang asing'
        }
    }

    // will mount terpanggil sebelum render
    // componentWillMount(){
    //     this.setState({user: 'yayan'})
    //     console.log('ini will mount' + this.state.user)
    // }

    // did mount terpanggil setelah render
    // componentDidMount(){
    //     console.log('ini did mount' + this.state.user)
    // }

    // will update berjalan sebelum ada perubahan(update) pada state
    componentWillUpdate(){
        console.log('ini will update')
    }

    // did update akan berjalan sesudah ada perubahan(update) pada state
    componentDidUpdate(){
        console.log('ini did update')
    }

    // penggunanaan arrow function dalam case ini digunakan agar tidak kita tidak perlu mem-bind kalau klik ini milik class 
    klik = ()=> {
        this.setState({user: this.refs.nama.value})
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.user}</h1>
                <input ref='nama' type='text' onChange={() => {this.klik()}} />
            </div>
        )
    }
}

export default App