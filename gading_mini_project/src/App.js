import React, { Component } from 'react'

import NavbarComponent from './components/navbar'

import {Switch, Route} from 'react-router-dom'


//#region Route
import Homepage from './pages/homepage'
import Carouselpage from './pages/carouselpage'
import Linkpage from './pages/linkpage'
import ToDoListPage from './pages/todolist'
import NotFound from './pages/404notfound'
import NewsPage from './pages/newspage'
import TabelJson from './pages/tabelJson'
//#endregion

export default class App extends Component {

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
              <Route path='*' component={NotFound}/>
           </Switch>
      </div>
    )
  }
}
