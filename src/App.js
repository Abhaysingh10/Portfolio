import React from 'react'
import { Home } from './Component/Home'
import { Contact } from './Component/Contact'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoute } from './AppRoute'

function App() {
  return (
    <div className='App'>
    <Router>
        <AppRoute />
      </Router>
    </div>
  )
}

export default App
