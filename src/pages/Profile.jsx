import React, { useEffect, useState } from 'react'
import TextInputUpdate from '../components/TextInputUpdate';
import Button from '../components/Button';

import {searchByEmail, updateUser} from "../service/user-management.service"

const Profile = () => {
  const [userData, setUserData] = useState({
    id:'',
    fullname:'',
    username:'',
    email:'',
    password:'',
    type:'',
  });


  const [errorMessage, setErrorMessage] = useState('');

  const [updateCounter, setUpdateCounter] = useState(0);

  const [isInfo, setIsInfo] = useState({
    // id:false,
    fullname:true,
    username:true,
    email:true,
    password:true,
    // type:false,
  });

  const handleInputChange = (event) => {
    // console.log("helo")
    if(event.target.name == 'fullname') {
      setUserData({...userData,fullname:event.target.value})
    }
    if(event.target.name == 'password') {
      setUserData({...userData,password:event.target.value})
    }
    if(event.target.name == 'email') {
      setUserData({...userData,email:event.target.value})
    }
    if(event.target.name == 'username') {
      setUserData({...userData,username:event.target.value})
    }
  }

  const changeToUpdate = () => {
    setIsInfo({
      fullname:!isInfo.fullname,
      username:!isInfo.fullname,
      email:!isInfo.fullname,
      password:!isInfo.fullname,
    })
  }
  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('currUser'));
    console.log("currentUser",currentUser)
    setUserData(currentUser);
    setIsInfo({
      fullname:true,
      username:true,
      email:true,
      password:true
    });
  },[updateCounter])

  const handelUpdate = () => {
    // updateUser(userData.id, userData)
    if(userData.fullname!="" && userData.email!="" && userData.password!="" && userData.password!=""){
      searchByEmail(userData.email).then((res)=>{
        if(res.length == 0 || res[0].email == userData.email){
          console.log("updaing in same email or new email")
          console.log("updaing userinfo")


          if(userData.fullname != "" && userData.email != "" && userData.username != "" && userData.password != ""){
            localStorage.setItem('currUser', JSON.stringify(userData));
            updateUser(userData.id, userData)
            .then(() => {
              console.log("user saved");
              setUpdateCounter(updateCounter+1);
            })
            .catch((err) => {
              console.log("Error in updaing profile: ",err);
            });
          }

          
        }else{
          setErrorMessage('Account is already created from this email');
        }
      })
      .catch((err)=>{
        console.log("Add User Error: "+err)
      })
    }
    else{
      // setErrorMessage('Pleas fill all the input boxes');
    }

    // if(userData.fullname != "" && userData.email != "" && userData.username != "" && userData.password != ""){
    //   localStorage.setItem('currUser', JSON.stringify(userData));
    //   updateUser(userData.id, userData)
    //   .then(() => {
    //     console.log("user saved");
    //     setUpdateCounter(updateCounter+1);
    //     // navigate('/profile');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // alert("SERVER ERROR");
    //   });
    // }
  }
  return (
    <div className='flexcol p-10 hw100 bor colx4'>
      <div className='w60 bor p-10  bgcol1 br10 borx3'>
        
        <TextInputUpdate 
          title="Full name" 
          type="text"
          name="fullname" 
          key="fullname"
          isInfo={isInfo.fullname}
          handleInputChange={handleInputChange}
          value={userData.fullname} />
        <TextInputUpdate 
          title="Email" 
          type="text"
          name="email" 
          key="email"
          isInfo={isInfo.email}
          handleInputChange={handleInputChange}
          value={userData.email} />
          <TextInputUpdate 
          title="Username" 
          type="text"
          name="username" 
          key="username"
          isInfo={isInfo.username}
          handleInputChange={handleInputChange}
          value={userData.username} />
        <TextInputUpdate 
          title="Password" 
          type="password"
          name="password" 
          key="password"
          isInfo={isInfo.password}
          handleInputChange={handleInputChange}
          value={userData.password} />
        <div className='pt-3 flex'>
          {isInfo.fullname && <Button title={isInfo.fullname?"Update Info":"Save"} click={changeToUpdate}/>}
          {!isInfo.fullname && <Button title={isInfo.fullname?"Update Info":"Save"} click={handelUpdate}/>}
          {!isInfo.fullname && <div className='flex ml-5'><Button title="Cancel" click={changeToUpdate}/></div>}
        </div>
      </div>
      

      {/* Full name : {userData.fullname}<br/>
      Email : {userData.email}<br/>
      Password : {userData.password}<br/>
      User Type : {userData.type}<br/> */}
    </div>
  )
}

export default Profile