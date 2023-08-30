import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoute } from './AppRoute'
import Footer from './Component/Footer'

function App() {
  return (
    <div className='App'>
    <Router>
        <AppRoute />
        <Footer/>
      </Router>
    </div>
  )
}

export default App
