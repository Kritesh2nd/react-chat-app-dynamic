import React, { useEffect, useState } from 'react'
import ChatBox from '../components/ChatBox'
import avatar from '../images/avatar1.png'
import avatar1 from '../images/avatar1.png'
import avatar2 from '../images/avatar2.png'
import avatar3 from '../images/avatar3.png'
import avatar4 from '../images/avatar4.png'
import avatar5 from '../images/avatar5.png'
import avatar6 from '../images/avatar6.png'
import avatar7 from '../images/avatar7.png'
import avatar8 from '../images/avatar8.png'

import {getAllUsers} from "../service/user-management.service"

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
  const [userListx, setUserListx] = useState([
    {id:1,profile:avatar, selectd:true, fullname:'Kritesh Thapa', emai:'kritesh@gmail.com',password:'password'},
    {id:2,profile:avatar, selectd:false, fullname:'Swastika Thapa', emai:'kritesh@gmail.com',password:'password'},
    {id:3,profile:avatar, selectd:false, fullname:'Kiran Chettri', emai:'kritesh@gmail.com',password:'password'},
    {id:4,profile:avatar, selectd:false, fullname:'Siddhartha Shrestha', emai:'kritesh@gmail.com',password:'password'},
    {id:5,profile:avatar, selectd:false, fullname:'Dillip Shrestha', emai:'kritesh@gmail.com',password:'password'},
  ])
  const [userList, setUserList] = useState([]);
  useEffect(() => {

    getAllUsers().then((res) => {
      // console.log("getting all users",res)
      const tempUserList = [...res];
      
      const newUserList = tempUserList.map(data => {
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
      // console.log("temp",tempUserList)
      // console.log("new",newUserList)
      setUserList(newUserList);
    }).catch((err)=>{
      console.log("no user found")
    })
    
    // getGroupMessagesByName('201').then((res) => {
    //   console.log("getting all data",res[0].messages)
    //   setMsgList(res[0].messages);
    // }).catch((err) => {
    //   console.log("no group message found")
    // });
    
    // setTimeout(()=>{
    //   if (scrollRef.current) {
    //     scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    //   }
    // },10)
    

  }, []);
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
        <ChatBox {...userList}/>
      </div>
        
      <div className='' data-name="user files"></div>
    </div>
  )
}

export default PageMessage