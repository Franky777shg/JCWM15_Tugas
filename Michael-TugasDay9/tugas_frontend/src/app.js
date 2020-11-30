import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Navigation from './components/navigation'

import Home from './pages/home'
import Page2 from './pages/page2'
import Slide from './pages/slide'
import To_do_list from './pages/to_do_list'
import News from './pages/news'
import NotFound from './pages/notfound'
import Data_table from './pages/data_table'

import './style.css'
import './to_do_list_style.css'


class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/slide' component={Slide}/>
          <Route path='/page2' component={Page2}/>
          <Route path='/to_do_list' component={To_do_list}/>
          <Route path='/news' component={News}/>
          <Route path='/data_table' component={Data_table}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    )
  }
}
export default App