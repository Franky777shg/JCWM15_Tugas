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

class App extends React.Component {
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
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        )
    }
}
export default App;