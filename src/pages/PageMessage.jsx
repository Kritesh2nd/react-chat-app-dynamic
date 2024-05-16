import React, { useEffect, useState } from 'react'
import ChatBox from '../components/ChatBox'
import avatar from '../images/avatar1.png'


const SideUser = ({data}) => {
  const {profile, fullname, selectd} = data;
  const [lastMessage, setLastMessage] = useState("");

  const handelLastMessage = () => {
    const data = "Hey man what's up Hey man what's up Hey man what's up";
    const CHAR_LIMIT = 25;
    if(data.length > CHAR_LIMIT){
      let newText = data.substring(0, CHAR_LIMIT) + "...";
      setLastMessage(newText);
    }
  }

  useEffect(()=>{
    handelLastMessage();
  },[])
  return(
    <div className={`${selectd?'bgcol1':''} flex px-4 py-4 out`}>
      <div className='' data-name="profile">
        <div className='bgcol4 br50 ovh bor'>
          <img className='h-12 w-12 bor ' src={profile}/>
        </div>
      </div>
      <div className='flexcol px-3 fg1 bor' data-name="name">
        <div className='fs16 colw'>{fullname}</div>
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

const PageMessage = () => {
  const [userList, setUserList] = useState([
    {id:1,profile:avatar, selectd:true, fullname:'Kritesh Thapa', emai:'kritesh@gmail.com',password:'password'},
    {id:2,profile:avatar, selectd:false, fullname:'Swastika Thapa', emai:'kritesh@gmail.com',password:'password'},
    {id:3,profile:avatar, selectd:false, fullname:'Kiran Chettri', emai:'kritesh@gmail.com',password:'password'},
    {id:4,profile:avatar, selectd:false, fullname:'Siddhartha Shrestha', emai:'kritesh@gmail.com',password:'password'},
    {id:5,profile:avatar, selectd:false, fullname:'Dillip Shrestha', emai:'kritesh@gmail.com',password:'password'},
  ])
  return (
    <div className='h-100 w100 flex '>
      <div className='w27 flexcol bor' data-name="user list">
        <div className='h-[60px] rel'>
          <span className='abs w-full h-[2px] bgcol1 ' style={{left:0,bottom:0}}></span>
        </div>
        <div className='flexcol ovs'>
          <div className='fs16 txt4 px-5 py-4'>
            Recent
            
          </div>
          {
            userList.map(data => (
              <SideUser key={data.id} data={data}/>
            ))
          }
        </div>
      </div>
        
      <div className='w73 bor' data-name="user message">
        <ChatBox/>
      </div>
        
      <div className='' data-name="user files"></div>
    </div>
  )
}

export default PageMessage