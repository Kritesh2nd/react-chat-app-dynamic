import React from 'react'
import { useNavigate } from "react-router-dom";

const Setting = () => {

  const navigate = useNavigate();
  const handelLogOut = () => {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('currUser');
    navigate('/signin');
  }
  return (
    <div className='flexcol hw100 bo'>
      <div className='p-5 bor'>
        <button className='py-2 px-5 colw borw bgx2' onClick={handelLogOut}>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Setting