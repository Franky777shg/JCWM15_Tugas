
import React from 'react';
import Navigation from './component/navbar.jsx'

import {Switch,Route } from "react-router-dom"

import Todolist from "./page/Todolist"
import link from "./page/link"
import Home from "./page/home"
import News from "./page/newsapi"
import Carousel1 from "./page/carousel"
import Json from "./page/tablejson.js"
import Login from "./page/login"
import Register from "./page/register" 
import Counter from "./page/counter" 

import {connect} from "react-redux"

import {login} from "./action"
import Axios from 'axios';

class App extends React.Component{

  componentDidMount(){
    Axios.get(`http://localhost:2000/datausers?username=${localStorage.username}`)
    .then((res) => this.props.login(res.data[0]))
        .catch((err) => console.log(err))
  }


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
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/counter" component={Counter}/>
          </Switch>
      </div>
    )
  }
}

export default connect(null,{login})(App);
