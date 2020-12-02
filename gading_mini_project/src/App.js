import React, { Component } from 'react'

import NavbarComponent from './components/navbar'

import {Switch, Route} from 'react-router-dom'

import Axios from 'axios'

import {connect} from 'react-redux'

//#region Route
import Homepage from './pages/homepage'
import Carouselpage from './pages/carouselpage'
import Linkpage from './pages/linkpage'
import ToDoListPage from './pages/todolist'
import NotFound from './pages/404notfound'
import NewsPage from './pages/newspage'
import TabelJson from './pages/tabelJson'
import Login from './pages/login'
import Register from './pages/register'
import Counter from './pages/counter'
//#endregion

import {login} from './action'

class App extends Component {

  componentDidMount(){
    Axios.get(`http://localhost:2000/account?username=${localStorage.getItem('username')}`)
    .then((res) => {
      this.props.login(res.data[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
          <NavbarComponent/>
           <Switch>
              <Route path='/' component={Homepage} exact />
              <Route path='/carouselpage' component={Carouselpage}/>
              <Route path='/linkpage' component={Linkpage}/>
              <Route path='/toDoListpage' component={ToDoListPage}/>
              <Route path='/newspage' component={NewsPage}/>
              <Route path='/tabelJSON' component={TabelJson}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <Route path='/counter' component={Counter}/>
              <Route path='*' component={NotFound}/>
           </Switch>
      </div>
    )
  }
}

export default connect(null, {login}) (App)