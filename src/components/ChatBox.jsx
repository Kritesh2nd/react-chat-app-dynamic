
import React, { useState, useRef, useEffect } from 'react'


import iconMessage1 from "../icons/message1.png"
import addPerson from "../icons/addPerson.png"
import phoneCall from "../icons/phoneCall.png"
import videoCall from "../icons/videoCall.png"
import info from "../icons/info.png"

import paperClip from "../icons/paperClip.png"
import smileEmoji from "../icons/smileEmoji.png"
import sendMessage from "../icons/sendMessage.png"

import avatar from '../images/avatar1.png'


const InputMsg = ({value,handelMessage}) => {
  return (
    <div className='flex bor w100'>
      <div className='flex aic'>
        <img src={paperClip} className='h-6 bor'/>
      </div>
      <div className='fg1 px-3'>
        <input 
          src="text" 
          className='fs16 py-[10px] p-[16px] br10 w-full' 
          value={value} 
          onInput={handelMessage} 
          placeholder='Type your message here'
        />
      </div>
      <div className='flex aic mr-3'>
        <img src={smileEmoji} className='h-6 bor'/>
      </div>
      <div className='flex aic'>
        <img src={sendMessage} className='h-8 bor' data-name={"send message"}/>
      </div>
    </div>
  )
}

const ChatHeader = () => {
  const iconList = [
    { id:1, name:'add user', icon:addPerson, },
    { id:2, name:'call', icon:phoneCall, },
    { id:3, name:'video call', icon:videoCall, },
    { id:4, name:'info', icon:info, },
  ]
  return (
    <div className='px-5 py-4 flex bor'>
      <div className='bgcol4 br50 ovh bor'>
        <img className='h-12 w-12 bor ' src={avatar}/>
      </div>
      
      <div className='flexcol bor pl-5' data-name="profile name box">
        <div className='fs18 font-medium'>
          Kritesh Thapa
        </div>
        <div className='flex aic fs12'>
          Online
          <div className='ml10 h-2 w-2 br50  bgg'></div>
        </div>
      </div>
      <div className="flex jcfe fg1 bor" data-name="icon box">
        {
          iconList.map(data => (
            <SetIcon key={data.name} icon={data.icon}/>
          ))
        }
      </div>
    </div>
  )
}

const Message = () => {
  // const selfMsg = true;
  const selfMsg = false;
  return (
    <div className={`${selfMsg?'fdrr':''} flex mb-4 bor`}>
      <div className='flexcol bor'>
        <div className='flex bor br50 bgcol1 ovh' data-name="profile head">
          <img src={avatar} className='h-12 w-12'/>
        </div>
      </div>
      <div className={`${selfMsg?'bgcol4':'bgsecondary'} flex p-3 br10 aic mx-4 colx1`} data-name="message" style={{width:'50%',maxWidth:'55%'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nesciunt illum maxime a quisquam! Beatae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nesciunt illum maxime a quisquam! Beatae!
      </div>
      <div className='fs12 txt4 flex aic bor'>
        7:28 AM
      </div>
    </div>
  )
}
const DisplayMessage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);
  return (
    <div className='bor h-full ova'>
      <div className='px-5 pt-10 h100 ova'  ref={scrollRef}>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </div>
    </div>
  )
}
const SetIcon = ({icon}) => {
  return (
    <div className='flex aic px-3 bor'>
      <img src={icon} className='w-6 bor cup' onClick={''}/>
    </div>
  )
}


const ChatBox = () => {

  const [msg, setMsg] = useState('');

  const handelMessage = (e) => {
    setMsg(e.target.value);
  }

 
  return (
    <div className='flexcol bgcol5 hw100'>
      
      <section className='h13 bor' data-name="profile box">
        <ChatHeader/>
      </section>
      
      <section className='h74 bor'>
        <DisplayMessage/>
      </section>

      <section className='h13 flex p20 bor'>
        <InputMsg value={msg} handelMessage={handelMessage}/>
      </section>
    </div>
  )
}

export default ChatBox