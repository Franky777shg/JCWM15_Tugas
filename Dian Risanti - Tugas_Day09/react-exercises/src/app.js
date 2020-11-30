import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Navigation from './component/navbar'

import Home from './page/home'
import LinkPage from './page/linkpage'
import CarouselCustom from './page/carousel'
import Practice from './page/todolist'
import NotFound from './page/404notfound'
import News from './page/newsapi'
import TableJSON from './page/tablejason'

class App extends React.Component {
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
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default App