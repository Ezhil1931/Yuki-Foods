import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
function Navbar({setLogin,cartList}) {
const [menu,setMenu]=useState("home");



  return (
    
    <div className='navbar'>
<img src={assets.logo} className='logo'/>

<div className='second'>
 
<ul className='menu'>

  <li  className={menu==="home"? "active":''}   onClick={()=>setMenu("home")} >  <Link to={"/"}>Home</Link>  </li>

<li  className={menu==="mobile"? "active":''} onClick={()=>setMenu("mobile")}   ><p><a href="#footer">Mobile App</a></p></li>
<li   className={menu==="contact"? "active":''} onClick={()=>setMenu("contact")}  > <a href="#footer"> Contacts </a></li> 
</ul>

<div className='navbar-right'>

<div  className='navbar-cart'>

   <Link to="/cart-items"> <img src={assets.basket_icon}/></Link> 
<div className='dot' style={ cartList.length===0?{display:'none'}:{display:'block'}}></div>

</div>
<button onClick={()=>setLogin(true)}> sign in</button>
</div>
</div>    


</div>
  )
}

export default Navbar