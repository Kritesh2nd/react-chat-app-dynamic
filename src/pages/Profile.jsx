import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [userData, setUserData] = useState({
    id:'',
    fullname:'',
    username:'',
    email:'',
    password:'',
    type:'',
  });

  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('currUser'));
    console.log("currentUser",currentUser)
    setUserData(currentUser);
  },[userData])
  return (
    <div className='p-10 hw100 bor colx4'>
      Full name : {userData.fullname}<br/>
      Email : {userData.email}<br/>
      Password : {userData.password}<br/>
      User Type : {userData.type}<br/>
    </div>
  )
}

export default Profile