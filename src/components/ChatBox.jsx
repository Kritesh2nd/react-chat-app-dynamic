
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
import avatar1 from '../images/avatar1.png'
import avatar2 from '../images/avatar2.png'
import avatar3 from '../images/avatar3.png'
import avatar4 from '../images/avatar4.png'
import avatar5 from '../images/avatar5.png'
import avatar6 from '../images/avatar6.png'
import avatar7 from '../images/avatar7.png'
import avatar8 from '../images/avatar8.png'

import { getAllUsers,getGroupMessagesByName, addUser, searchByEmail } from "../service/user-management.service"


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

const Message = ({selfId,msgData}) => {
  const {id, uid, message, time } = msgData;
  // const selfMsg = true;
  const selfMsg = selfId == id;
  return (
    <div className='flexcol bor'>
      <div className={`${selfMsg?'none':''} pl-16 fs12 txt4 flex aic bor`}>
        {/* {fullname} */}
        scasc selfId:{selfId} id:{id}
      </div>
      <div className={`${selfMsg?'fdrr':''} flex mb-4 bor`}>
      <div className='flexcol bor'>
        <div className='flex bor br50 bgcol1 ovh' data-name="profile head">
          <img src={avatar} className='h-12 w-12'/>
        </div>
      </div>  
      <div className={`${selfMsg?'bgcol4':'bgsecondary'} flex p-3 br10 aic mx-4 colx1`} data-name="message" style={{width:'50%',maxWidth:'55%'}}>
        {message}
      </div>
      <div className='fs12 txt4 flex aic bor'>
        {time}
      </div>           
    </div>
    </div>
  )
}
const DisplayMessage = () => {
  const scrollRef = useRef(null);

  const selfId = "0";


  const [msgList, setMsgList] = useState([]);
  const allMsg = [
    { id:"1", profile:avatar1, fullname:'Kritesh Thapa', message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, quidem!', time:'7:28 AM' },
    { id:"2", profile:avatar6, fullname:'Swastika Thapa', message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quo libero dolorum!', time:'7:29 AM' },
    { id:"3", profile:avatar2, fullname:'Kiran Chettri', message:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', time:'7:30 AM' },
    { id:"4", profile:avatar3, fullname:'Siddhartha Thapa', message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti.', time:'7:31 AM' },
    { id:"1", profile:avatar1, fullname:'Kritesh Thapa', message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, quidem!', time:'7:28 AM' },
    { id:"2", profile:avatar6, fullname:'Swastika Thapa', message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quo libero dolorum!', time:'7:29 AM' },
    { id:"3", profile:avatar2, fullname:'Kiran Chettri', message:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', time:'7:30 AM' },
    { id:"4", profile:avatar3, fullname:'Siddhartha Thapa', message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti.', time:'7:31 AM' },
    
  ]
  useEffect(() => {
    
    getGroupMessagesByName('201').then((res) => {
      console.log("getting all data",res[0].messages)
 
// {id: '01', uid: '01', message: 'Lorem ipsum dolor sit amet consectetur adipisicing…um in cupiditate nam tempora, consequuntur magni!', time: '7:00 PM'} 
// {id: '02', uid: '02', message: 'Lorem ipsum dolor sit amet consectetur adipisicing…t cum officia, aliquam eum cumque necessitatibus.', time: '7:01 PM'} 
// {id: '03', uid: '01', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', time: '7:02 PM'}
// {id: '04', uid: '02', message: 'Quae quia earum suscipit cum officia, aliquam eum cumque necessitatibus.', time: '7:03 PM'}
      setMsgList(res[0].messages);
    }).catch((err) => {
      console.log("no group message found")
    });
    
    setTimeout(()=>{
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    },10)
    

  }, []);
  return (
    <div className='bor h-full ova'>
      <div className='px-5 pt-10 h100 ova'  ref={scrollRef}>
        {
          msgList.map(data => (
            <Message key={data} selfId={selfId} msgData={data}/>
          ))
        }
        

      </div>
    </div>
  )
}
const SetIcon = ({icon}) => {
  return (
    <div className='flex aic px-3 bor'>
      <img src={icon} className='w-6 bor cup'/>
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