import React from 'react'
import '../components Css/MainBody.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


function MainBody() {
  useGSAP(()=>{
    gsap.from(".child3 h1:nth-child(2)",{
      x:-300,
      duration:2,
      opacity:0
    })
  })

  return (
    <div className='main_parent'>
       <div className='child1'></div>
       <div className='child2'></div>
       <div className='child3'>
            <h1>HEY! I AM</h1>
            <h1>SYED USAMA</h1>
            <h1>I'm a <span>Software Engineer</span></h1>
       </div>
    </div>
  )
}

export default MainBody