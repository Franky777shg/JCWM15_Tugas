import React from "react"
//kita import komponen di nabvar (yg sudah d ambil dr package reactbootstrap) 
import Navigation from './component/navbar' //setelah kita impor kita taro d return
//kita import pages
import home from './pages/home'
import isiCarousel from './pages/carousel'
import todolist from './pages/todolist'


import{Switch, Route} from 'react-router-dom'
class App extends React.Component {
    render(){
        return(
            <div>

                <Navigation/>
                {/* kita buat route2nya dsini */}
                <Switch>
                    <Route path='/' component={home} exact />
                    <Route path='/carousel' component={isiCarousel}/>
                    <Route path='/todolist' component={todolist}/>
                </Switch>
            </div>
        )
    }
}

export default App