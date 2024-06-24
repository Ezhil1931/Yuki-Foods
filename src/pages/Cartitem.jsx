import React from 'react'
import './Cartitem.css'
import { useState } from 'react'
import { BsEmojiSmile } from "react-icons/bs"

import { assets } from '../assets/assets'


function Cartitem({cartList, setCartList, total, setTotal }) {    
    const removeList = (id, price,index1) => {

        if (total !== 0) {
            setTotal(total - price)
        }


        const list = cartList.filter((item,index) => index !== index1);
       
        setCartList(list);


    }


    return (
        <div className='cart'>
<div className='first-cart'>

    
            <h1>{total !== 0 ? "Cart Items" : "Empty Cart"}</h1>

            {cartList.length === 0 ? <div className='empty'>
                <p id='para'>Go order your food <BsEmojiSmile id='smile' /></p>
            </div>:<></>
            }
            <div className='cart-list'>
                {   cartList.map((item, id) => {
                        const price = item.price * 10;

                        return <div className='cart-item' key={id} >
                            <img src={item.image} />
                            <p>{item.name}</p>

                            <p>Rs.{price}</p>

                            <img id='rm-list' onClick={() => removeList(item._id, price,id)}  src={assets.cross_icon}/>
                        </div>
                    })
                }
            </div>
            <div className='cart-total' style={total === 0 ? { display: 'none' } : {
                display: 'block'

            }}  >
                <p>Total amount : </p>
                <p>Rs.{total}</p>
            </div>
    
</div>


<div className='address'  style={total === 0 ? { display: 'none' } : { display: 'block' }} >

<h1>Address to Delivery <img  src={assets.parcel_icon} alt='delivery'/></h1>

<div className='address-input'>
<label>Door No.</label>
<input type="text" id='in-small'/>

<label>Street Name</label>
<input type='text'/>

<label>Area </label>
<input type='text' id='area'/>


<label>Pincode</label>
<input type='number' id='in-small'/>

<label>Phone No.</label>
<input type='number' id='in-small'/>
 
</div>
<p>Cash on delivery only</p>
<button id='order-btn'  >Order</button>
      
</div>      
        </div>
    )
}





export default Cartitem