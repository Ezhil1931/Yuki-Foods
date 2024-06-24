import React from 'react'
import "./Footer.css"
import { assets } from '../assets/assets'
import { IoIosCall } from "react-icons/io"
import {FaInstagram } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"
function Footer() {
  return (
    <footer className='footer' id='footer'>

<div className='footer-img'>
<img src={assets.logo} className='logo'/>

</div>

<div className='app'>
<img  src={assets.play_store}/>
<img  src={assets.app_store}/>

</div>
<ul className='contact'>
<li>Contact</li>
<li> <IoIosCall id='icon' className="call" />123456789</li>
<li> <MdMailOutline id='icon'/> yukifoods@gmail.com</li>
<li> <FaInstagram id='icon'/>yukifoods</li>

</ul>

    </footer>
  )
}

export default Footer