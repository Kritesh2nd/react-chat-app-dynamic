import React from 'react'

import Auth from "../components/Auth"

const Landing = () => {
  return (
    <div className='p-24 px-36 hw-100 bgcol1'>
      <div className='flex hw100'>
        <div className="flexcol jcc w50">
          <div className='fs80 font-bold txt4'>Nova</div>
          <div className='fs80 font-bold txt5' style={{marginTop:'-30px'}}>Chat</div>
          <div className='fs18 font-medium txt3 pt10'>
            "Life is short. Smile while you still have teeth."
          </div>
        </div>
        <div className='w50'>
          <Auth/>
        </div>
      </div>
    </div>
  )
}

export default Landing