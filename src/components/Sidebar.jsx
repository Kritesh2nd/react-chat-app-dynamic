import React, { useState } from 'react'
import avatar from '../images/avatar1.png'

import iconMessage1 from "../icons/message1.png"
import iconPerson1 from "../icons/person1.png"
import iconSetting1 from "../icons/setting1.png"

import iconMessage2 from "../icons/message2.png"
import iconPerson2 from "../icons/person2.png"
import iconSetting2 from "../icons/setting2.png"

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

const User = () => {

  const [lastMessage, setLastMessage] = "Hey man what's up Hey man what's up Hey man what's up";

  const handelLastMessage = () => {
    
  }

  return(
    <div className='flex px-4 py-4 outx3'>
      <div className='' data-name="profile">
        <div className='bgcol4 br50 ovh bor'>
          <img className='h-12 w-12 bor ' src={avatar}/>
        </div>
      </div>
      <div className='flexcol px-3 fg1 borx' data-name="name">
        <div className='fs16 colw'>Kritesh Thapa</div>
        <div className='fs13 txt4 ovh'>
          {lastMessage}
        </div>
      </div>
      <div className='flexcol jcc' data-name="time">
        <div className='fs12 txt4 pb5'>Now</div>
        <div className='flexmid fs14 bgcol4 colw br8'>
          1
        </div>
      </div>
    </div>
  )
}
const Sidebar = () => {
  const [leftSideBtn, setLeftSideBtn] = useState([
    {id:1, icon1:iconMessage1, icon2:iconMessage2, name:'message', active: true},
    {id:2, icon1:iconPerson1, icon2:iconPerson2, name:'person', active: false},
    {id:3, icon1:iconSetting1, icon2:iconSetting2, name:'setting', active: false},
  ])

  const [userList, setUserList] = useState([
    {id:1, fullname:'Kritesh Thapa', emai:'kritesh@gmail.com',password:'password'},
    {id:1, fullname:'Swastika Thapa', emai:'kritesh@gmail.com',password:'password'},
    {id:1, fullname:'Kiran Chettri', emai:'kritesh@gmail.com',password:'password'},
    {id:1, fullname:'Siddhartha Shrestha', emai:'kritesh@gmail.com',password:'password'},
    {id:1, fullname:'Dillip Shrestha', emai:'kritesh@gmail.com',password:'password'},
  ])
  const handelSideButton = (data) => {
    let tempLeftSideBtn = [...leftSideBtn];
    tempLeftSideBtn[0].active = false;
    tempLeftSideBtn[1].active = false;
    tempLeftSideBtn[2].active = false;
    if(data.name == 'message'){
      console.log("message");
      tempLeftSideBtn[0].active = true;
    }

    if(data.name == 'person'){
      console.log("person");
      tempLeftSideBtn[1].active = true;
    }

    if(data.name == 'setting'){
      console.log("setting");
      tempLeftSideBtn[2].active = true;
    }
    setLeftSideBtn(tempLeftSideBtn)
  }
  return (
    <div className='flex hw100 outw'>
      <div className="flexcol bgcol1 ">
        <div className='p-4 mt10 bor'>
          <div className='bgcol4 br50 ovh bor'>
            <img className='h-10 w-10 bor ' src={avatar}/>
          </div>
        </div>
        {leftSideBtn.map(data => (
          <LeftSideButton key={data.id} data={data} handelSideButton={handelSideButton}/>
        ))}
        
      </div>
      <div className="flexcol bor bor fg1">
        <div className='h-[60px] rel'>
          
          <span className='abs w-full h-[2px] bgcol1 ' style={{left:0,bottom:0}}></span>
        </div>
        <div className='flexcol'>
          <div className='fs16 txt4 px-5 py-4'>
            Recent
          </div>
          <User/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar