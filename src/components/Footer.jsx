import React from 'react'
import '../styles/footer.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Footer() {
  return (
    <div id='contact' className='FooterMain'>
        <div className='footerchild'>
            <div>
                <h2>Address:</h2>
                <h4>Shabbir House TV Colony Swati Gate Peshawar Cant</h4>
            </div>
            <div>
                <h2>Contact:</h2>
                <h4>+92-334-9034893</h4>
            </div>
            <div>
                <h2>Email:</h2>
                <h4>usamasyed237@gmail.com</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer