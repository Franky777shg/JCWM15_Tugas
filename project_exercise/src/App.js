import React from 'react'

// import navigation bar from components navbar
import Navigation from './components/navbar.js'

// import switch
import {Switch, Route} from 'react-router-dom';

// import content
import Home from './pages/home'
import Carousel1 from './pages/carousel'
import Todolist from './pages/todolist'
import Linkpage from './pages/linkpage'
import Berita1 from './pages/berita'
import Table1 from './pages/tablejson'
import Error from './pages/404notfound'

class App extends React.Component {
    render () {
      return (
      <div>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path='/linkpage' component={Linkpage}/>
          <Route path="/carousel" component={Carousel1}/>
          <Route path="/todolist" component={Todolist}/>
          <Route path='/berita' component={Berita1}/>
          <Route path='/tablejson' component={Table1}/>
          <Route path="*" component={Error}/>
        </Switch>
      </div>
      )
    }
  }
  
  export default App
  