import React, {  useState } from 'react'
import "./navbar.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {  IoMdMenu } from "react-icons/io"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { FaSearch ,FaRegHeart , FaRegUser ,FaShoppingCart ,FaTimes ,FaCaretDown  } from "react-icons/fa";
import { removeBasket } from '../../cart/CartSlice';




// Basket,burgermenu sidebarlarin open &&close////
const Navbar = () => {

    const [SidebarOpen,setSidebarOpen]=useState(false)
    const [CartOpen,setCartOpen]=useState(false)
    const cart=useSelector(state=>state.basket.items)

    const dispatch=useDispatch()
    const removeProduct=(id)=>{
        dispatch(removeBasket(id))
    }
    // go to checkoutPage ///
    const navigate=useNavigate()
    const goCheckout=()=>{
    setCartOpen(false); 
    navigate('/checkout')
  }

  return (
    <>
        <nav>
          <div className='burger'>
                <IoMdMenu className='burgerMenu' onClick={()=>setSidebarOpen(true)} ></IoMdMenu>
            </div>
        <NavLink to="/"><img src="https://fone-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1660639000" className='logo-img' alt="" /></NavLink>
        
            <ul className='NavLinks'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink></li>
            <li >
            <NavLink to="/men" className={({ isActive }) => isActive ? 'active' : undefined}>
              Shop 
            </NavLink><span className="label">HOT</span>
            </li>
            <li><NavLink to="/women" className={({ isActive }) => isActive ? 'active' : undefined}>Featured</NavLink></li>
            <li><NavLink to="/accessories" className={({ isActive }) => isActive ? 'active' : undefined}>Pages</NavLink></li>
            <li><NavLink to="/jewelry" className={({ isActive }) => isActive ? 'active' : undefined}>Blogs</NavLink></li>
           
            </ul>
            <div className='icons'>
             <FaSearch />
             <FaRegUser className='adminpanel' />
             <NavLink to="/wishlist" style={{color:"black"}}><FaRegHeart/></NavLink>
            <div className="cartIcon">
             <LiaShoppingBagSolid style={{cursor:"pointer"}} onClick={()=>setCartOpen(true)}></LiaShoppingBagSolid>
            <span>{cart ? cart.length : 0}</span>
            </div>
            
            </div>
        
        </nav>
        <div className={`burger-sidebar ${SidebarOpen ? 'open': ''}`} >
        <div className='burgerhead'>
            <button className='btn1'><i><IoMdMenu /></i>  MENU </button>
            <button className='btn2'><p><i ><FaRegUser/></i></p> LOGIN </button>
          </div>
            <ul className='NavLinks-sidebar'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>NEW</NavLink></li>
            <li>
            <NavLink to="/men" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}> MEN </NavLink>
            </li>
            <li><NavLink to="/women" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>Home</NavLink></li>
            <li><NavLink to="/accessories" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>Shop</NavLink></li>
            <li><NavLink to="/jewelry" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>Featured</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>Pages</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>Blogs</NavLink></li>
            </ul>
            <button onClick={()=>setSidebarOpen(false)} className="btnclose">Close</button>
        </div>
        <div className={`cart-sidebar ${CartOpen? 'open': ''}`}>
             <FaTimes className='close' onClick={()=>setCartOpen(false)}></FaTimes>
             <h3>Shopping Cart</h3>
             <div className='cart-items1'>
                {cart ? cart.map((item)=>(
                  <div className='product-info'>
                    <div className='product-img'>
                   <img src={item.image} alt="" className='basket-img'/>
                    <FaTimes className='delete-icon' onClick={()=>removeProduct(item.id)}></FaTimes>
                   </div>
                    <div>
                    <p>{item.name}</p>
                    <p>Price:{item.count}x{item.price}={item.count*item.price}</p>
                    </div>
                  </div>  
                )):
                (<p>Basket is Empty</p>)}
             </div>
             <div className="btns">
                <button onClick={goCheckout} >Go to CheckOut</button>
             </div>
        </div>
    </>
  )
}

export default Navbar