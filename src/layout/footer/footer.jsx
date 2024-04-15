import React from 'react'
import "./footer.css"
import { FaHeart,FaTwitter,FaBehance ,FaDribbble,FaInstagram} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="footerarea">
        <img className='' src="https://fone-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1660639000" alt="" />
          <p className='footer_text'>
            Sophisticated simplicity for the
            independent mind</p>
          <div className='iconss'>
          <a href='./'><span><FaTwitter /></span></a>
          <a href='./'><span><FaDribbble /></span></a>
          <a href='./'><span><FaBehance /></span></a>
          <a href='./'><span><FaInstagram /></span></a>
          </div>
        </div>  
        <div className="footerarea">
          <h3>Help & Information</h3>
          <span className='underline'></span>
          
          <ul>
          <li><a href="">Pagination</a></li>
                    <li><a href=""> About Us</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Products Return</a></li>
                    <li><a href="">Wholesale Policy</a></li>
          </ul>
        </div> 
        <div className="footerarea">
          <h3>About us</h3>
          <span className='underline'></span>
        
          <ul>
                    <li><a href="">Pagination</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Accessories</a></li>
                    <li><a href="">Home Page</a></li>
          </ul>
        </div> 
        <div className="footerarea">
          <h3> Categories</h3>
          <span className='underline'></span>
          <ul>
                    <li><a href="">Menu items</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Address Store</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">HomePage</a></li>
          </ul>
        </div>

      </div> 
      <hr></hr> 
      <div className='footerend'>
        <span>© Copyright 2022 | Fone By EngoTheme. Powered by Shopify</span>
        <span><img src="https://fone-store-demo.myshopify.com/cdn/shop/files/logoo-removebg-preview.png?v=1660638975" alt="" /></span>
      </div>
    </>
  )
}

export default Footer