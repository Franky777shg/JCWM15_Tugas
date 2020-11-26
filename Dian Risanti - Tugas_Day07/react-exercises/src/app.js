import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Navigation from './component/navbar'

import Home from './page/home'
import LinkPage from './page/linkpage'
import CarouselCustom from './page/carousel'
import Practice from './page/practice'

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
                </Switch>
            </div>
        )
    }
}

export default App