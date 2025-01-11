import React, { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, settotalItems] = useState(0);
  //add to cart functionality
  const addToCart = (itemId) => {
    settotalItems(totalItems+1);
    setCartItems((previous)=>{
        return {...previous, [itemId] : (previous[itemId] || 0) + 1}
    })
    }
  //function to remove from the cart
  const removeFromCart = (itemId) => {
    settotalItems(totalItems-1);
    setCartItems((previous) => {
      if(previous[itemId] <= 1){
        const { [itemId]: _, ...rest } = previous;
        return rest
      }
      return { ...previous, [itemId]: previous[itemId] - 1 };
    });
  };

  const clearCart = ()=>{
    setCartItems({});
  }

  const deleteItem = (itemId)=>{
    
    
    
    setCartItems((previous)=>{
      const {[itemId] : _, ...rest} = previous;
      settotalItems(totalItems - previous[itemId])
      return rest;
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
        deleteItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
