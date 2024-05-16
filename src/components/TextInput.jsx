import React from 'react'

const TextInput = (props) => {
  return (
    <div className='flexcol px-5 pb10 bor'>
      <label className='fs18 pb5 txt4'>
        {props.title}
      </label>
      <div>
        <input 
          type={props.type}
          className='fs18 py-1 px-2 br5 w100 transparent borcol5 txt5' 
          onChange={props.handleInputChange}
          name={props.name}
          value={props.value} 
          placeholder={`enter your ${props.name}...`}
          {...props}

          />
      </div>
      { props.errMessage !== '' && <div className='fs15 colx3 pt5 txt6'>{props.errMessage}</div>}
      
    </div>
  )
}

export default TextInput