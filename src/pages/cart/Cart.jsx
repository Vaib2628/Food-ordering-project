import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/cartContext'
import { food_list } from '../../assets/frontend_assets/assets'
const Cart = () => {

  const {cartItems, addToCart, removeFromCart, totalItems, deleteItem} = useContext(CartContext);
  
  return (
    <div className='container w-[100%] sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto h-screen transition-all scroll-smooth duration-500'>
         <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-center mt-10'>Your <span className='text-orange-600'>Cart</span></h1>
         <hr  className='my-10 h-1 bg-black rounded-[50%]'/>

    {totalItems === 0 ? (
        <div className='text-center text-orange-700 text-2xl font-mono h-full'>Currently your cart is empty go to shopping..</div>
    ) : (
      <div className='flex flex-col h-full gap-3'>
        {
          food_list.map((item, id)=>{
            if(cartItems[item._id] > 0){
              return (
                <div key={id} className='flex flex-row  h-auto sm:h-[20%] gap-20 max-sm:gap-3  justify-between items-center shadow-md rounded-xl'>
                  <div className='h-full flex items-center max-sm:gap-1 gap-6 p-2 w-[40%]'>
                    <img src={item.image} alt="" className='rounded-2xl h-full shadow-slate-50 shadow-sm max-sm:w-20'/>
                  <h2 className='font-bold text-md sm:text-lg '>{item.name}</h2>
                  </div>
                
                    <p className='text-lg font-bold'>${item.price * cartItems[item._id]}</p>
                  <button className='px-3 py-1 bg-orange-600 rounded-lg flex gap-3 text-white items-center justify-center text-lg'><span className='h-full' onClick={()=>{removeFromCart(item._id)}}>-</span><span className=''>{cartItems[item._id]}</span><span onClick={()=>{addToCart(item._id)}}>+</span></button>
                  <button onClick={()=>deleteItem(item._id)} className='h-full px-2 sm:px-4 bg-slate-50' >
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                    <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{'width':25,'height':25}}>
                    </lord-icon>
                  </button>
                  

                </div>
              )
            }
          })
        }
      </div>
    )}
    </div>
  )
}

export default Cart
