import React from 'react'

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import Auth from "../components/Auth"

const Landing = ({currUser,setCurrUser}) => {

  const options = {
    background: {color: "#fff",},
    particles: {
      shape: {type: "circle"},
      number: {value: 0},
      color: {value: "random"},
      opacity: {value: 0.3},
      size: {value: {min: 5, max: 20}},
      move: { enable: true, speed: 6, random: false, outModes: "bounce", }
    },
    absorbers: [
      { position: { x: 50, y: 50 }, size: { value: 50, limit: 100, } }
    ],
    emitters: [
      {
        direction: "top-right",
        position: { x: 0, y: 100 },
        rate: { delay: 0.3, quantity: 4, },
      },
    ]
  };
 

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  
  return (
    <div className='p-24 px-36 hw-100 bgcol4'>
      <div className='flex hw100'>
        <div className="flexcol jcc w50">
          <div className='fs80 font-bold txt2'>Nova</div>
          <div className='fs80 font-bold txt3' style={{marginTop:'-30px'}}>Chat</div>
          <div className='fs18 font-medium txt3 pt10 ff1'>
            "Life is short. Smile while you still have teeth."
          </div>
        </div>
        <div className='w50'>
          <Auth currUser={currUser} setCurrUser={setCurrUser}/>
        </div>
      </div>
    </div>
  )
}

export default Landing