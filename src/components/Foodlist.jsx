import React, { useState } from 'react'
import { food_list } from '../assets/assets'
import "./Foodlist.css"
import { assets } from '../assets/assets' 

import {  BiCart } from "react-icons/bi"

function Foodlist( {cartList,setCartList ,category,setTotal,total}) {


  const addCart=(id,price)=>{

const List = food_list.filter((item)=>item._id===id)
 
setCartList(c=>[...c,List[0]]);
setTotal(total+price)

if(navigator){
  navigator.vibrate(100);
}


}
  
  
  
  return (
    <div className='food-content'>
<div className='food-title'>
<h1>Foods</h1>
<hr/>
</div>

        <div className='food-list'>

      
{
    food_list.map((item,id)=>{

        const price=item.price*10;
if(category==="All" || category===item.category){


        
       return<div className='food-item' key={id}>
<img src={item.image}  id='img'/>
<h2>{item.name}</h2>
      <img src={assets.rating_starts} id='rating'/>
       <div className='buy'>
       <p className='price'>Rs.{price}</p>
        <BiCart  className='cart-btn' onClick={()=>addCart(item._id,price)}/>

       </div>
       
        </div>
        }
})
}


</div>
    
    </div>
  )
}

export default Foodlist