import React, { useEffect, useState } from 'react'
import avatar from '../images/avatar1.png'

import iconMessage1 from "../icons/message1.png"
import iconPerson1 from "../icons/person1.png"
import iconSetting1 from "../icons/setting1.png"

import iconMessage2 from "../icons/message2.png"
import iconPerson2 from "../icons/person2.png"
import iconSetting2 from "../icons/setting2.png"
import { useNavigate } from 'react-router-dom'

const LeftSideButton = ({data, handelSideButton}) => {
  const { id, name, active, icon1, icon2 } = data;
  return (
    <button className={`${active?'bgcol2':'bgcol1'} rel flex bor cup`} data-name={name} onClick={()=>{handelSideButton({name})}}>
      <input type="hidden" name={name}/>
      <div className={`${active?'':'none'} abs h-full w-2 bgcol4`}></div>
      <div className='py-4 flex jcc w-full'>
        <img src={active?icon1:icon2} className='h-6 w-6'/>
      </div>
    </button>
  )
}

const Sidebar = () => {

  const navigate = useNavigate();
  const [leftSideBtn, setLeftSideBtn] = useState([
    {id:1, icon1:iconMessage1, icon2:iconMessage2, name:'message', active: true, link:"message"},
    {id:2, icon1:iconPerson1, icon2:iconPerson2, name:'person', active: false, link:"profile"},
    {id:3, icon1:iconSetting1, icon2:iconSetting2, name:'setting', active: false, link:"setting"},
  ])

  const handelSideButton = (data) => {
    let tempLeftSideBtn = [...leftSideBtn];
    tempLeftSideBtn[0].active = false;
    tempLeftSideBtn[1].active = false;
    tempLeftSideBtn[2].active = false;
    if(data.name == 'message'){
      console.log("message");
      tempLeftSideBtn[0].active = true;
      navigate(leftSideBtn[0].link);
    }

    if(data.name == 'person'){
      console.log("person");
      tempLeftSideBtn[1].active = true;
      navigate(leftSideBtn[1].link);
    }

    if(data.name == 'setting'){
      console.log("setting");
      tempLeftSideBtn[2].active = true;
      navigate(leftSideBtn[2].link);
    }
    setLeftSideBtn(tempLeftSideBtn)
  }
  return (
    <div className='flex hw100 out'>
      <div className="flexcol bgcol1 w100">
        <div className='flexmid py-5 mt10 bor'>
          <div className='bgcol4 br50 ovh bor'>
            <img className='h-10 w-10 bor ' src={avatar}/>
          </div>
        </div>
        {leftSideBtn.map(data => (
          <LeftSideButton key={data.id} data={data} handelSideButton={handelSideButton}/>
        ))}
        
      </div>
      <div className="flexcol bor bor fg1"></div>
    </div>
  )
}

export default Sidebar