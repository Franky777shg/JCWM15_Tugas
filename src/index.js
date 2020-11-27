import React from "react"
import ReactDOM from "react-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
//setting browser router untuk berpindah2 link/tempat
import {BrowserRouter} from 'react-router-dom'

import App from './app'

ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
    document.getElementById('root')
) 