import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
const Header = () => {
  return (
    <div className='md:w-[90%] container mx-auto h-[85vh]'>
        <div className='header flex flex-col justify-start h-[90%]'>
            <img src={assets.header_img} alt="header-image" style={{opacity:0.9,
              width:'100%',height:'100%',objectFit:'cover'}} className='h-full'/>
            <h1 className='text-4xl md:text-5xl 2xl:text-6xl font-extrabold font-sans mx-10 mt-32 md:mt-40 lg:mt-44 xl:mt-[230px] 2xl:mt-[400px] absolute flex flex-col text-orange-50'>
                <span className='my-2'>Order your</span>
                <span>favourite food here</span>
                <span className='mt-1'><button className='bg-slate-200 text-black text-lg md:text-xl  font-semibold px-5 py-2 rounded-full '>View menu</button></span>
            </h1>
        </div>
    </div >
  )
}

export default Header
