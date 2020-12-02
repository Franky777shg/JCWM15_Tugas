import Axios from 'axios'
import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Navigation from './components/navbar'
import Home from './page/01home'
import Linkpage from './page/02link'
import Karousel from './page/03carousel'
import Todolist from './page/04todolist'
import NotFound from './page/05notfound'
import News from './page/06news'
import TableJSON from './page/07table'
import Login from './page/08login'
import Register from './page/09register'

import {login} from './action'
import {connect} from 'react-redux'

class App extends React.Component {
    componentDidMount() {
        Axios.get(`http://localhost:2000/users2?username=${localStorage.getItem('username')}`)
        .then((res) => this.props.login(res.data[0]))
        .catch((err) => console.log(err))
    }

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
                    <Route path="/table" component={TableJSON} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        )
    }
}
export default connect(null, {login})(App)