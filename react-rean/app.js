import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Navigation from './components/navbar'
import Home from './page/01home'
import Linkpage from './page/02link'
import Karousel from './page/03carousel'
import Todolist from './page/04todolist'
import NotFound from './page/05notfound'
import News from './page/06news'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/link" component={Linkpage} />
                    <Route path="/carousel" component={Karousel} />
                    <Route path="/todolist" component={Todolist} />
                    <Route path="/news" component={News} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        )
    }
}
export default App;

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { 
//             user: ''
//         }
//     }

//     klik = () => {
//         this.setState({user: this.refs.nama.value})
//     }

//     // componentWillMount() {
//     //     this.setState({user: 'Yayan'})
//     // }
//     // componentDidMount() {
//     //     this.setState({user: 'Woi'})
//     // }

//     // componentWillUpdate() {
//     //     console.log(`Ini will update`)
//     // }
//     // componentDidUpdate() {
//     //     console.log(`Ini did update`)
//     // }

//     render() {
//         return (
//             <div>
//                 <h1>Hello {this.state.user}</h1>
//                 <input ref="nama" onChange={() => {this.klik()}} />
//             </div>
//         )
//     }
// }
// export default App;







