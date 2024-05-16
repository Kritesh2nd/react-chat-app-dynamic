import React from 'react'

const Button = ({title,click}) => {
  return (
    <div className='py-1 px-8 fs20 br7 bor bgcol3 txt5 cup' onClick={click}>
      {title}
    </div>
  )
}

export default Button