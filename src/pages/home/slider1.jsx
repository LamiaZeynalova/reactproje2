
import React, { useEffect, useState } from 'react'
import { FaCircle} from "react-icons/fa";
import './new.css'


export default function SimpleSlider() {

const images=
['https://fone-store-demo.myshopify.com/cdn/shop/files/s1.jpg?v=1660640243',

'https://fone-store-demo.myshopify.com/cdn/shop/files/s2.jpg?v=1660640292']
    const [currentIndex,setCurrentIndex]=useState(0)

  const PrevSlide=()=>{
    setCurrentIndex((curIndex)=>curIndex===0 ? images.length-1 : curIndex-1)
  }
  const NextSlide=()=>{
    setCurrentIndex((curIndex)=>curIndex===images.length-1 ? 0: curIndex+1)
  }
  const slideStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',
  };
  useEffect(() => {
    const slideInterval = setInterval(NextSlide, 3000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);
 
    return (
        <>
          <div className="slider" style={{backgroundImage:`url${images[currentIndex]}`}}>
            <div className='slide' style={slideStyle}>
            <h3>Style Destination</h3>
            <h2>Burger Delicious</h2>
            <h3>It is a long established fact that a reader will be 
            <br />
             distracted by the readable content</h3>
            <br />
            <button>SHOP NOW</button>
            </div>
            <div className='dot'>
            {images.map((_, index) => (
              <FaCircle
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                style={currentIndex === index ? { color: '#0fb78d' } : {}}
              />
            ))}
            </div>
          </div></>)
}