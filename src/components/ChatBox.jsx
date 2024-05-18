
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

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

import { getAllUsers,addGroupMessagesTwoZeroOne, getGroupMessagesTwoZeroOne,timeConverter } from "../service/user-management.service"


const InputMsg = ({value,handelMessage,inputRef,handleKeyPress,handelSendMessage}) => {

 
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
          onChange={handelMessage} 
          onKeyPress={handleKeyPress}
          placeholder='Type your message here'
          ref={inputRef}
        />
      </div>
      <div className='flex aic mr-3'>
        <img src={smileEmoji} className='h-6 bor'/>
      </div>
      <div className='flex aic'>
        <img src={sendMessage} className='h-8 bor' data-name={"send message"} onClick={handelSendMessage}/>
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
          201
        </div>
        <div className='flex aic fs12'>
          Online
          <div className='ml10 h-2 w-2 br50  bgg'></div>
        </div>
      </div>
      <div className="flex jcfe fg1 bor" data-name="icon box">
        {
          iconList.map(data => (
            <SetIcon key={data.name+data.id} icon={data.icon}/>
          ))
        }
      </div>
    </div>
  )
}

const Message = ({selfId,msgData}) => {
  const {id, uid, message, fullname, time } = msgData;
  // const selfMsg = true;

  const selfMsg = selfId == uid;
  return (
    <div className='flexcol bor'>
      <div className={`${selfMsg?'none':''} pl-16 fs12 txt4 flex aic bor`}>
        {fullname}
        
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
const DisplayMessage = ({selfId,pressKey}) => {
  const scrollRef = useRef(null);

  // const [selfId, setSelfId] = useState("0");

  const [userList, setUserList] = useState([]);

  const [msgList, setMsgList] = useState([]);
  const [newMsgList, setNewMsgList] = useState([]);
  const [latestMsg, setLatestMsg] = useState([]);
  const [counter, setCounter] = useState(0);
  setInterval(()=>{
    setCounter(counter+1);
  },[4000])
  
  
  useEffect(()=>{

    if(userList.length > 0 && msgList.length > 0){
      managedMessage(userList,msgList)
    }
    
  },[userList,msgList])
  useEffect(() => {
    console.log("oress key",pressKey)
    // localStorage.getItem("")
    getAllUsers().then((res) => {
      const temp1 = [...res];
      const temp2 = temp1.map(data => {
        const randomAvatarCode = Math.floor((Math.random()  * 8) + 2);
        let userAvatar;
        switch(randomAvatarCode){
          case 1: userAvatar = avatar1; break;
          case 2: userAvatar = avatar2; break;
          case 3: userAvatar = avatar3; break;
          case 4: userAvatar = avatar4; break;
          case 5: userAvatar = avatar5; break;
          case 6: userAvatar = avatar6; break;
          case 7: userAvatar = avatar7; break;
          case 8: userAvatar = avatar8; break;
          default: userAvatar = avatar1;
        }
        return {...data,selectd:false,profile:userAvatar}
      })
      setUserList(temp2);
      return temp2;
    })
    .catch((err)=>{
      console.log("NO USER FOUND. ERROR: "+err);
    })

    // getGroupMessagesTwoZeroOne.then((res) => {
    //   console.log(res);
    //   // setMsgList(res);
    // }).catch((err) => {
    //   console.log("NO GROUP MESSAGE FOUND. ERROR: "+err);
    // });

    getGroupMessagesTwoZeroOne().then((res) => {
      console.log(res);
      setMsgList(res);
    }).catch((err) => {
      console.log("NO GROUP MESSAGE FOUND. ERROR: "+err);
    });
    
    

    setTimeout(()=>{
      
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }

    },500)
    

  }, [pressKey]);
  
  useEffect(()=>{
    getGroupMessagesTwoZeroOne().then((res) => {
      console.log(res);
      setMsgList(res);
    }).catch((err) => {
      console.log("NO GROUP MESSAGE FOUND. ERROR: "+err);
    });
  },[counter])

  const managedMessage = (userListState,messageListState) =>{
    const newList = messageListState.map(m => {
      const msgId = m.uid;
      const test = userListState.filter(u => u.id == msgId);
      console.log("m,test",m,test[0]);
      const test2 = {...m,...test[0]}
      return test2;
    })
    console.table(newList);
    setNewMsgList(newList);
  }
  


  return (
    <div className='bor h-full ova'>
      <div className='px-5 pt-10 h100 ova'  ref={scrollRef}>
        {
          newMsgList.map((data,index) => (
            <Message key={data.id+data.uid+index} selfId={selfId} msgData={data}/>
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


const ChatBox = ({userList}) => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const [selfId, setSelfId] = useState("0");

  
  // const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const handelMessage = (e) => {
    // setMsg(inputRef.current.value)
    setMsg(e.target.value);
    // console.log("user msg:",msg,"ref:",inputRef.current.value)
    console.log(msg)
  }

  const [pressKey, setPressKey] = useState(0);


  const handleKeyPress = (event) => {
    if(event.key == 'Enter' && msg != ''){
      
      handelSendMessage();
    }

  }
  useEffect(()=>{
    const currUser = JSON.parse(localStorage.getItem('currUser'));
    setSelfId(currUser?currUser.id:"0")
  },[])
  const handelSendMessage = () => {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    
    const data = {
      id: uuidv4(),
      uid: selfId,
      message: msg,
      time: timeConverter(showTime)
    }
    console.table(data);
    addGroupMessagesTwoZeroOne(data)
    setMsg("");
    setPressKey(pressKey+1)
    console.log("pressKey",pressKey)
    // navigate("/signin");
  } 
  // useEffect(()=>{

  // },[])
  return (
    <div className='flexcol bgcol5 hw100'>
      
      <section className='h13 bor' data-name="profile box">
        <ChatHeader/>
      </section>
      
      <section className='h74 bor'>
        <DisplayMessage selfId={selfId} {...userList} pressKey={pressKey}/>
      </section>

      <section className='h13 flex p20 bor'>
        <InputMsg 
          value={msg} 
          inputRef={inputRef} 
          handelMessage={handelMessage} 
          handleKeyPress={handleKeyPress}
          handelSendMessage={handelSendMessage}
        />
      </section>
    </div>
  )
}

export default ChatBox