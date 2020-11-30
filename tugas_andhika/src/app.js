import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Navigation from './component/navbar'
import Home from './page/home'
import LinkPage from './page/linkpage'
import TodoList from './page/todolist'
import NotFound from './page/404notfound'
import CarouselComp from './page/carousel'
import NewsAPIid from './page/newsAPI_id'
import NewsAPIus from './page/newsAPI_us'
import NewsAPIjp from './page/newsAPI_jp'

class App extends React.Component {
    render(){
        return(
            <div>
                <Navigation/>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/LinkPage' component={LinkPage}/>
                    <Route path='/Carousel' component={CarouselComp}/>
                    <Route path='/TodoList' component={TodoList}/>
                    <Route path='/NewsAPIid' component={NewsAPIid}/>
                    <Route path='/NewsAPIus' component={NewsAPIus}/>
                    <Route path='/NewsAPIjp' component={NewsAPIjp}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default App