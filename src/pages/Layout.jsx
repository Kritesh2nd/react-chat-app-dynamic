import React from 'react'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div className='flex bor bgcol2 hw-100'>
      <div className='w28'>
        <Sidebar/>
      </div>
      <div className='w72'>

      </div>
    </div>
  )
}

export default Layout