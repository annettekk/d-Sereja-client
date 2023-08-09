import React from "react";
import { useSnapCarousel } from 'react-snap-carousel';
import "./Carousel.css";
import Imgone from '../../Images/HeroHome.jpg'

export default function Carousel() {
  
  const imgArr = [Imgone, Imgone]

  const { scrollRef } = useSnapCarousel();

  return (
    
    
      <ul className="scroll"
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'auto',
        scrollSnapType: 'x mandatory'
      }}   >
    {imgArr.map((photo, _id) => (
        <li key={_id} className="carousel-item"
        style={{
          backgroundColor: 'aqua',
          fontSize: '50px',
          width: '250px',
          height: '250px',
          flexShrink: 0,
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src={photo} alt='model'/>
        </li>))}
        </ul>
   
    
  );
}
