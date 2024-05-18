import React, { useState } from 'react'

import './app.css'
import Landing from './pages/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import PageMessage from './pages/PageMessage'
import Setting from './pages/Setting'
import Profile from './pages/Profile'

const App = () => {
  // const [currUser, setCurrUser] = useState({});
  return (
    <div className='app'>
      {/* <Landing/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<PageMessage/>}/>
            <Route path="message" element={<PageMessage/>} />
            <Route path="profile" element={<Profile/>} />
            <Route path="setting" element={<Setting/>} />
          </Route>
          <Route path="/signin" element={<Landing/>} />
          <Route path="/test" element={<PageMessage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App