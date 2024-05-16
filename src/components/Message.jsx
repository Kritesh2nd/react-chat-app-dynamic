import React from 'react'

const Message = ({message}) => {
  return (
    <div>
      { 
      message && 
      <div className="alert-message">
        <p>{message}</p>
      </div>
      }
    </div>
  )
}

export default Message