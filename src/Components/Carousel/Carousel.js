import React, { useEffect, useState } from "react";
import "./Carousel.css";
import axios from "axios";
import HeroHome from "../../Images/HeroHome.jpg";
import HeroHome2 from "../../Images/HeroHome2.jpg";
import HeroHome3 from "../../Images/HeroHome3.jpg";
import HeroHome4 from "../../Images/HeroHome4.jpg";
import HeroHome5 from "../../Images/HeroHome5.jpg";
import HeroHome6 from "../../Images/HeroHome6.jpg";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Carousel() {
  const [count, setCount] = useState(0);
  const[photos, setPhotos] = useState([]);
  
  const imgArr = [
    HeroHome,
    HeroHome2,
    HeroHome3,
    HeroHome4,
    HeroHome5,
    HeroHome6,
  ];

  useEffect(() => {
      getPhotos()
  }, [])

  async function getPhotos(){
      try{
          let API = 'https://analogue-film.onrender.com/photos?faved=true'
          const result = await axios.get(API)
          setPhotos([])
          setPhotos(result.data)
      }catch(error){
          console.log(error)
      }
  }

  function setPhotoArr(){
    for(let i=0; i < photos.length; i++){
      imgArr.push(require(`../../${photos[i].photoSrc}`))
    }
  }

  function handleRightClick() {
    if (count <= imgArr.length-2) {
      setCount(count + 1);
    } else if (count === imgArr.length-1) {
      setCount(0);
    }
  }

  function handleLeftClick() {
    if (count === 0) {
      setCount(imgArr.length-1);
    } else if (count >= 1) {
      setCount(count - 1);
    }
  }
  setPhotoArr()

  return (
    <div>
      <div className="hero-container">
        <img className="hero-home" src={imgArr[count]} alt="HeroHome" />
        <FaChevronCircleLeft className="left-click" onClick={handleLeftClick} />
        <FaChevronCircleRight
          className="right-click"
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
}
