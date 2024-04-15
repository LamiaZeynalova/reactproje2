
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  "./slider2.css";

const Slider2 = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

  
    const slidesData = [
      {
        id: 1,
        title: "Ham Sandwich",
        description: "It is a long established fact that a reader.",
        imageUrl: "https://fone-store-demo.myshopify.com/cdn/shop/files/ba3.png?v=1660639419",
      
      },
      {
        id: 2,
        title: "Hamburger Veggie",
        description: "It is a long established fact that a reader.",
        imageUrl: "https://fone-store-demo.myshopify.com/cdn/shop/files/ba2.png?v=1660639531",
        
      },
      {
        id: 3,
        title: "Sushi Sashimi",
        description: "It is a long established fact that a reader.",
        imageUrl: "https://fone-store-demo.myshopify.com/cdn/shop/files/ba4.png?v=1660639419",
        
      },
      {
        id: 4,
        title: "Pepperoni Pizza",
        description: "It is a long established fact that a reader.",
        imageUrl: "https://fone-store-demo.myshopify.com/cdn/shop/files/ba1.png?v=1660639419",
       
      },
    ];
  
    return (
      <div className='slider22'>
        <Slider {...settings}>
          {slidesData.map(slide => (
            <div key={slide.id} className='slider2'>
                <img src={slide.imageUrl} alt={slide.title}/>
                <div className='slider-text'>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Slider2;
  
  