import React, { useEffect, useState } from 'react'
import './new.css'
import { FaCircle ,FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsShieldLock } from "react-icons/bs";
import { IoReload } from "react-icons/io5";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../../cart/CartSlice';
import SimpleSlider from './slider1';
import Slider2 from './slider2';

const New = () => {

   const [data,setData]=useState([])
   useEffect(()=>{
    axios("http://localhost:3002/cards").then(data=>setData(data.data))
   },[data])

  const dispatch=useDispatch()
  const cart=useSelector(state=>state.basket.items)

  const addedBasket=(product)=>{
    dispatch(addBasket(product))
  }

   return (
    <>
     <SimpleSlider/>
     <div className='section_text'>
            <h3>VISIT OUR STORE</h3>
            <span className='text_line'></span>
      </div>
      <Slider2/>
      

      <div className="promo-container">
    <div class="promo-left" >
        <div className="promo-content">
            <h3 className="promo-title">Any Day Offers</h3>
            <p>Suspendisse faucibus sed.</p>
            <a href="./" className="cta-button">Shop Now</a>
        </div>
        <div class="promo-overlay"></div>
    </div>
    <div className="promo-right">
        <div class="promo-content">
            <h3 className="promo-title">Other Flavors</h3>
            <p>Suspendisse faucibus sed.</p>
            <a href="./" className="cta-button">Shop Now</a>
        </div>
        <div className="promo-overlay"></div>
    </div>
</div>

      
     <div className='img_section'>
     <div className='img'style={{backgroundImage:"url(https://fone-store-demo.myshopify.com/cdn/shop/files/ba7.jpg?v=1660640108)"}} >
     <div className='img_text'>
          <h1>Enjoy The Delicious Taste</h1>
          <p>When you’ve got your health, you got everything.</p>
          <button>SHOP NOW</button>
    </div>
    </div>
    </div>

      {/* <div className='info'>
        <div className='info-context'>
           <CiDeliveryTruck />
           <h3>WORLDWIDE DELIVERY</h3>
           <p>Far far away, behind the word mountains,</p>
           <p>far from the countries</p>
        </div>
        <div className='info-context'>
            <BsShieldLock/>
            <h3>SECURE PAYMENTS</h3>
            <p>Far far away, behind the word mountains,</p>
            <p>far from the countries</p>
        </div>
        <div className='info-context'>
            <IoReload/>
            <h3>SIMPLE RETURNS</h3>
            <p>Far far away, behind the word mountains,</p>
            <p>far from the countries</p>
        </div>
      </div> */}
       {/*/////////////////////cards////////////////////*/}
      {/* <div className='cards'>
          {data && data.map(product=>(
            <div key={product.id} className='card'>
            <img src={product.image} alt="" />
            <h4>{product.name}</h4>
             <div className='price'>
              <p>£{product.price}</p>
             <button onClick={()=>addedBasket(product)}>Add</button>
              </div>
            </div>
          ))}
      </div> */}
      {/* .................men section ...................... */}
      {/* <section className='men-section'>
        <div className='men'>
            <div className='men-info'>
              <p>Limited Offers 20% OFF</p>
              <h1>Week Deal</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum <br /> fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis <br /> neque nulla earum.</p>
              <button>SHOP NOW</button>
            </div>
        </div>
      </section> */}
      {/* .......................second slıde.................. */}


      {/* <section className='slider-section'>
        <div className='headSlider'>
          <div className='slider_text'>
            <h3>VISIT OUR STORE</h3>
            <p className='text_line'></p>
          </div>
         
          <div className='sliderArrow'>
            <FaArrowLeft onClick={Back}></FaArrowLeft>
            <FaArrowRight onClick={Next}></FaArrowRight>
          </div>
        </div>
        <div className="sliderForma">
    {[0, 1, 2].map(offset => {
      const itemIndex = (sliderIndex + offset) % sliderProducts.length;
      return (
        <div className='slider-items'>
        <div key={offset} className="slider-item" style={{ backgroundImage: `url(${sliderProducts[itemIndex].url})` }}>
        </div>
         <div className="slider-info">
         <h5>{sliderProducts[itemIndex].title}</h5>
         <p>£{sliderProducts[itemIndex].price}</p>
       </div>
       </div>
        
      );
    })}
  </div>
        <div className='dot2'>
        {images.map((_, index) => (
          <FaCircle
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            style={currentIndex === index ? { color: '#0fb78d' } : {}}
          />
        ))}
        </div>
      </section> */}

    </>
  )}

export default New