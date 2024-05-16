import React from 'react'

import './app.css'
import Landing from './pages/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'

const App = () => {
  return (
    <div className='app'>
      {/* <Landing/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path="/user-management" element={<div>he</div>} /> 
          </Route>
          <Route path="/signin" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App