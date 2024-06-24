import React, { useState } from 'react'
import "./Home.css"
import Header from '../components/Header'
import Menulist from '../components/Menulist'
import Foodlist from '../components/Foodlist'

function Home( {cartList,setCartList,total,setTotal} ) {
  
const [category,setCategory]=useState("All")


return (
    <div className='head'>
        <Header/>
        <Menulist category={category} setCategory={setCategory}/>
        <Foodlist   category={category}  cartList={cartList} setCartList ={setCartList}  total={total} setTotal={setTotal} />
    
    </div>
  )
}

export default Home