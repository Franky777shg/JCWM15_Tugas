
import React from 'react';
import Navigation from './component/navbar'

import {Switch,Route } from "react-router-dom"

import Todolist from "./page/Todolist"
import link from "./page/link"
import Home from "./page/home"
import News from "./page/newsapi"
import Carousel1 from "./page/carousel"
import Json from "./page/tablejson.js"

class App extends React.Component{

  render(){
    return(
      <div >
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/todolist" component={Todolist}/>
            <Route path="/link" component={link}/>
            <Route path="/news" component={News}/>
            <Route path="/carousel" component={Carousel1}/>
            <Route path="/json" component={Json}/>
          </Switch>
      </div>
    )
  }
}

export default App;
