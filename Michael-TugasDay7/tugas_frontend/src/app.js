import React from 'react';
import Navigation from './components/navigation'
import Home from './pages/home'
import Page2 from './pages/page2'
import Slide from './pages/slide'
import To_do_list from './pages/to_do_list'
import {Switch, Route} from 'react-router-dom'
import './style.css'
import './to_do_list_style.css'

class App extends React.Component {

  render() {
    return (
      <div >
        <Navigation/>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/slide' component={Slide}/>
          <Route path='/page2' component={Page2}/>
          <Route path='/to_do_list' component={To_do_list}/>
        </Switch>
      </div>
    )
  }
}
export default App