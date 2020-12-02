import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Axios from 'axios'

import {connect} from 'react-redux'

import Navigation from './components/navigation'

import Home from './pages/home'
import Page2 from './pages/page2'
import Slide from './pages/carousel'
import To_do_list from './pages/to_do_list'
import News from './pages/news'
import NotFound from './pages/notfound'
import Data_table from './pages/data_table'
import Login from './pages/login'
import Register from './pages/register'

import {login} from './action'

import './style.css'
import './to_do_list_style.css'

class App extends React.Component {
  componentDidMount () {
    Axios.get(`http://localhost:2000/login?username=${localStorage.username}`)
    .then((res) => this.props.login(res.data[0]))
    .catch((err) => console.log(err))
  }
  render() {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/carousel' component={Slide}/>
          <Route path='/page2' component={Page2}/>
          <Route path='/to_do_list' component={To_do_list}/>
          <Route path='/news' component={News}/>
          <Route path='/data_table' component={Data_table}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    )
  }
}
export default connect(null, {login}) (App)