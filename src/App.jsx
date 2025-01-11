import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Home from './components/Home'
import Header from './components/Header'
import Cart from './pages/cart/Cart'
import { Route, Router, Routes } from 'react-router'
import LoginPop from './components/loginPop'
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className='scroll-smooth transition-all ease-in-out duration-300'>
    
    <Routes>
      <Route path='/cart' element={<div><Navbar/><Cart/></div>} />
      <Route path='/' element={<><Navbar setShowLogin={setShowLogin} showLogin={showLogin}/> {showLogin ? <LoginPop/> :<><Header/><Home/></>}</>}></Route>
    </Routes>
    
      
      

      
      
    
    </div>
  )}

export default App
