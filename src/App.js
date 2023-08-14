import React from 'react'
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
