import React from 'react'
import "./Menulist.css"
import { menu_list } from '../assets/assets'

function Menulist({category,setCategory}) {


  
  return (
    <div className='menu-list' id='menu-list'>
        <h1>Explore our menu</h1>
        <div className='m-food-list'>
{menu_list.map((items,id)=>(

<div className='m-food-item' key={id} onClick={()=>setCategory(category===items.menu_name?"All":items.menu_name)}>
<img    className={category===items.menu_name?"active":""}   src={items.menu_image} alt=''/>
<p>{items.menu_name}</p>
</div>

))}

        </div>
        <hr/>
        </div>
  )
}

export default Menulist