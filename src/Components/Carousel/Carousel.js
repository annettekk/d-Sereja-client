import React, { useState } from "react";
import "./Carousel.css";
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

  const imgArr = [
    HeroHome,
    HeroHome2,
    HeroHome3,
    HeroHome4,
    HeroHome5,
    HeroHome6,
  ];

  function handleRightClick() {
    if (count <= 4) {
      setCount(count + 1);
    } else if (count === 5) {
      setCount(0);
    }
  }

  function handleLeftClick() {
    if (count === 0) {
      setCount(5);
    } else if (count >= 1) {
      setCount(count - 1);
    }
  }

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
