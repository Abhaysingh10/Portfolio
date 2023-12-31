import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './store' 
import './Assest/Font/Rubik/static/Rubik-Regular.ttf'
import './Assest/Font/Raleway/static/Raleway-Regular.ttf'
import './Assest/Javascript/index.js'
import './../node_modules/react-bootstrap/dist/react-bootstrap'
import '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
const root=ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
