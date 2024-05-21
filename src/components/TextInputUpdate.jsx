import React from 'react'

const TextInputUpdate = (props) => {
  return (
    <div className='flexcol pb15 bor'>
      <label className='fs18 pb10 txt4 none'>
        {props.title}
        {props.isInfo?"T":"F"}
      </label>
      <div>
        <input 
          type={props.type}
          className={`${props.isInfo?'fs20':'fs18 borx3'} py-2 px-3 br5 w100 transparent txt5`}
          onChange={props.handleInputChange}
          name={props.name}
          value={props.value} 
          placeholder={`enter your ${props.name}...`}
          {...props}
          disabled={props.isInfo}
          // {props.isInfo?disabled:''}
          
          />
      </div>
      { props.errMessage !== '' && <div className='fs15 colx3 pt5 txt6'>{props.errMessage}</div>}
      
    </div>
  )
}

export default TextInputUpdate