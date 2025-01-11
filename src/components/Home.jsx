import {React, useState , useRef, useContext, useEffect} from 'react'
import { food_list } from '../assets/frontend_assets/assets'
import { assets } from '../assets/frontend_assets/assets'
import Fooditem from './Fooditem';
import Menu from './Menu';
import { CartContext } from '../context/cartContext';


const Home = () => {
    const [category, setcategory] = useState('all')
    
    const {cartItems} = useContext(CartContext);
    

    useEffect(() => {
      console.log("Cart Items:", cartItems);
    }, [cartItems]);
    
    

  return (<>
  <Menu category={category} setcategory={setcategory}/>
    <div className='container mx-auto px-4 py-4'>
      <h1 className='text-3xl font-sans font-bold '>Top picks for you</h1>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {food_list.map((item, index)=>{
            if (category === 'all' || item.category === category){
                
                return <Fooditem key={index} item={item} />
                
            }
        })}
        
      </div>
    </div>
    </>
  )
}

export default Home
