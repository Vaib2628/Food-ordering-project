import {React, useState, useContext} from "react";
import { assets } from "../assets/frontend_assets/assets";
import { food_list } from "../assets/frontend_assets/assets";

import { CartContext } from "../context/cartContext";

const Fooditem = ({ item }) => {
  const [itemCount, setItemCount] = useState(0)
  
  const {cartItems, setCartItems, addToCart, removeFromCart, clearCart} = useContext(CartContext) ;

  
  

  return (
     <div className="w-[80%] sm:w-[40%] md:w-[25%] lg:w-[20%] m-3 h-auto rounded-lg  shadow-lg overflow-hidden">
      <div className="relative">
        <img src={item.image}  alt="" />
        {cartItems[item._id] > 0 ? (
          <div className="absolute bottom-0 right-0 gap-1 m-2 flex justify-center items-center bg-white rounded-full shadow-lg p-2 py-1 transition-all duration-300  ease-out"> 
            <img src={assets.remove_icon_red} onClick={()=>removeFromCart(item._id)} alt="remove" className="cursor-pointer" />
            {cartItems[item._id]}
            <img src={assets.add_icon_green} onClick={()=>addToCart(item._id)} alt="" className="cursor-pointer"/>
          </div> 
        ) : (
          <div onClick={()=>addToCart(item._id)} className="absolute bottom-0 right-0 w-10 m-2 cursor-pointer transition-all duration-50">
            <img src={assets.add_icon_white} alt="" />
          </div>
        )}
      </div>

      <h2 className="px-4 mt-4 text-xl min-w-full font-bold ">{item.name}</h2>
      <p className="px-4 mt-2 text-sm"> {item.description}</p>
      <p className="px-4 my-3 text-lg text-red-500">${item.price}</p>
    </div>
  );
};

export default Fooditem;
