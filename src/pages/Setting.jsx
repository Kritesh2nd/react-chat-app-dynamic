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
    <div className='flexcol p-10 hw100 bor colx4'>
      <div className='flexcol h-[300px] w60 bor p-10  bgcol1 br10 borx3'>
        <div className='fs24 pb10 bor'>
          Setting
        </div>
        <div className='flex jcsb'>
          <div>Log Out</div>
          <button className='py-[6px] px-[20px] colw borw bgx2 br3' onClick={handelLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Setting