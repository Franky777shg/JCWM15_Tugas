import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

import {BrowserRouter} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducer'

const globalState = createStore(allReducers)
globalState.subscribe(() => console.log('Global State : ', globalState.getState()))

ReactDOM.render(
    <Provider store={globalState}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)