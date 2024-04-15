import React from 'react'
import { SlArrowRight } from "react-icons/sl";

const wishlist = () => {
  return (
    <>
         <div className='cart' 
         style={{backgroundImage:"url(//fone-store-demo.myshopify.com/cdn/shop/files/collection.jpg?v=1660638931 )", height:"400px"}}>
        <div style={{color:"white"}}>
            <h1>Wishlist</h1>
            <p className='head_text'>
                <a href='./'>Home</a>
                <SlArrowRight />
                <strong>Wishlist</strong>
                </p>
        </div>
    </div>
    </>
  )
}

export default wishlist