import React from 'react'
import { useState } from 'react'
import { menu_list } from '../assets/frontend_assets/assets'
import Home from './Home'
const Menu = ({category , setcategory}) => {
    const [menu, setMenu] = useState(menu_list)
    
  return (
    <div className='container mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-sans font-bold'>Explore our wide menu</h1>
        <div className='h-full flex gap-4 m-4 text-center w-full overflow-x-scroll' >
        {menu.map((item, index)=>{
        return <div onClick={()=>{setcategory(item.menu_name)}} key={index} className='flex-none p-1 cursor-pointer hover:drop-shadow-xl hover:scale-105 transition-all duration-500'>
            <img src={item.menu_image} alt="" className="rounded-full w-min"/>
            <span>{item.menu_name}</span>
        </div>
        })}
      </div>
    </div>
  )
}

export default Menu

