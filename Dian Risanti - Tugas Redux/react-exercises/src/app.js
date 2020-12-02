import React from 'react'
import Navigation from './component/navbar'
import {Switch, Route} from 'react-router-dom'
import Axios from 'axios'
import {connect} from 'react-redux'
import {login} from './action'

import Home from './page/home'
import LinkPage from './page/linkpage'
import CarouselCustom from './page/carousel'
import Practice from './page/practice/todolist'
import NotFound from './page/404notfound'
import News from './page/practice/newsapi'
import TableJSON from './page/practice/tablejason'
import Login from './page/login'
import Register from './page/register'
import Counter from './page/counter'

class App extends React.Component {
    componentDidMount(){
        Axios.get(`http://localhost:2000/users?username=${localStorage.username}`)
        .then((res) => this.props.login(res.data[0]))
        .catch((err) => console.log(err))
    }

    render() {
        return(
            <div>
                <Navigation/>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/linkpage' component={LinkPage}/>
                    <Route path='/carousel' component={CarouselCustom}/>
                    <Route path='/practice' component={Practice}/>
                    <Route path='/news' component={News}/>
                    <Route path='/table-json' component={TableJSON}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/counter' component={Counter}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default connect(null, {login})(App)