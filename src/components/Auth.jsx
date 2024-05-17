import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import TextInput from './TextInput'
import Button from './Button'
import Message from './Message'

import { addUser, searchByEmail } from "../service/user-management.service"

const Auth = () => {
  const navigate = useNavigate();
  const [authTypeSignIn, setAuthTypeSignIn] = useState(true);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [userList, setUserList] = useState([]);

  const handleInputChange = (event) => {
    console.log("helo")
    if(event.target.name == 'email') {
      setEmail(event.target.value);
    }
    if(event.target.name == 'password') {
      setPassword(event.target.value);
    }
    if(event.target.name == 'fullname') {
      setFullname(event.target.value);
    }
  }
  
  const doLogin = () => {
    console.log("doLogin")
    searchByEmail(email).then((res)=>{
      const userData = res[0];
      const rightEmailAndPas = userData.password == password;

      if(rightEmailAndPas){
        localStorage.setItem('isLogin', '1');
        localStorage.setItem('currUser', JSON.stringify(res[0]));
        // var user = JSON.parse(localStorage.getItem('currUser'));
        // console.log(localStorage.getItem('currUser'))
        // console.log("User data: ",JSON.parse(localStorage.getItem('currUser')))
        console.log("login passed")
        navigate('/');
      }
    })
    .catch((err)=>{
      console.log("nooo err: "+err)
      setErrorMessage('Invalid email or password');
      setPassword('');
      navigate('/signin');
    })
  }

  const doRegister = () => {
    
    if(fullname!="" && email!="" && password!=""){
      searchByEmail(email).then((res)=>{
        if(res.length == 0){
          console.log("no account")
          console.log("adding user")
          const newUser = {
            "id": uuidv4(),
            "fullname":fullname,
            "username": fullname,
            "email": email,
            "password": password
          }
          addUser(newUser);
          localStorage.setItem('isLogin', '1');
          localStorage.setItem('currUser', JSON.stringify(newUser));
          navigate('/');
          console.log("register passed")
        }else{
          setErrorMessage('Account is already created from this account');
        }
      })
      .catch((err)=>{
        console.log("Add User Error: "+err)
      })
    }
    else{
      setErrorMessage('Pleas fill all the input boxes');
    }
  }

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if(isLogin == '1') {
      navigate('/');
    }
    else{
      navigate('/signin');
    }
  }, [authTypeSignIn]);

  const handelSignInUp = value => {
    console.log('authTypeSignIn: '+authTypeSignIn);
    setAuthTypeSignIn(value)
    setErrorMessage('')
  }
  return (
    <div className='flexcol hw100 p20 ptn30 br10 bgcol2'>
      <div className='flexmid tac fs24 font-semibold '>
        <span className={`${authTypeSignIn?'':'txt4 fs18 font-medium'} cup`} onClick={()=>{handelSignInUp(true)}}>Sign In </span>
        <span className='font-medium'>&nbsp;|&nbsp;</span>
        <span className={`${authTypeSignIn?'txt4 fs18 font-medium':''} cup`} onClick={()=>{handelSignInUp(false)}}>Sign Up</span>
      </div>
      <div className='pt20'>
      
      {
        !authTypeSignIn && <TextInput 
        title="Full name" 
        type="text"
        name="fullname" 
        key="fullname"
        handleInputChange={handleInputChange}
        value={fullname} />
      }
      <TextInput 
        title="Email" 
        type="text"
        name="email" 
        key="email"
        handleInputChange={handleInputChange}
        value={email} />
      <TextInput 
        title="Password" 
        type="password"
        name="password" 
        key="password"
        handleInputChange={handleInputChange}
        value={password} />
        <div className='flex pt20 pl20'>
          <Button click={authTypeSignIn?doLogin:doRegister} title={authTypeSignIn?'Sign In':'Sign Up'}/>
        </div>
        
        <div className='fs15 pt5 txt6 pl20'>
          {errorMessage && authTypeSignIn && <Message message={errorMessage}/>}
          {errorMessage && !authTypeSignIn && <Message message={errorMessage}/>}
        </div>
      </div>
    </div>
  )
}

export default Auth