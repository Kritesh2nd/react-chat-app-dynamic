import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from 'react'
import TextInput from './TextInput'
import Button from './Button'
import Message from './Message'

import {searchByUsername,searchByEmail} from "../service/user-management.service"

const Auth = () => {
  const navigate = useNavigate();
  const [authTypeSignIn, setAuthTypeSignIn] = useState(true);
  const [username, setUsername] = useState('');
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
    if(event.target.name == 'username') {
      setUsername(event.target.value);
    }
  }
  const doLogin = (e) => {
    // setUserList
    console.log(searchByEmail("kritesh@gmail.com"))
    // let isLogin = false;
    // if(email === "admin" && password === "admin") {
    //   isLogin = true;
    // }

    // if(isLogin) {
    //   // showSuccessMessage('Login successful');
    //   localStorage.setItem('isLogin', '1');
    //   // navigate('/user-management');
    //   navigate('/');
    // } else {
    //   setErrorMessage('Invalid email or password');
    // }
  }

  const doRegister = (e) => {
    let isResiter = false;
    if(email !="" && password != "" && username != "") {
      isResiter = true;
    }

    if(isResiter) {
      // showSuccessMessage('Login successful');
      localStorage.setItem('isLogin', '1');
      // navigate('/user-management');
      navigate('/');
    } else {
      setErrorMessage('Please enter valid data');
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
  }, []);

  const handelSignInUp = value => {
    console.log('authTypeSignIn: '+authTypeSignIn);
    setAuthTypeSignIn(value)
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
        title="Uusername" 
        type="text"
        name="username" 
        key="username"
        handleInputChange={handleInputChange}
        value={username} />
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
          <Button click={doLogin} title={authTypeSignIn?'Sign In':'Sign Up'}/>
        </div>
        
        <div className='fs15 pt5 txt6 pl20'>
          {errorMessage && authTypeSignIn && <Message message={errorMessage}/>}
        </div>
      </div>
    </div>
  )
}

export default Auth