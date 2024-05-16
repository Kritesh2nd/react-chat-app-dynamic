import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import avatar from '../images/avatar1.png'
import ChatBox from '../components/ChatBox';
import { Outlet, useNavigate } from 'react-router-dom';




const Layout = () => {
  
  const navigate = useNavigate();
  useEffect(()=>{
    const isLogin = localStorage.getItem('isLogin');
    if(isLogin == '1') {
      navigate('/');
    }
    else{
      navigate('/signin');
    }
  },[])
  return (
    <div className='flex bgcol2 hw-100'>
      
      <section className='w5 bor'>
        <Sidebar/>
      </section>
      
      <section className='w95 bor flex fg1 '>
        <Outlet/>

      </section>

    </div>
  )
}

export default Layout