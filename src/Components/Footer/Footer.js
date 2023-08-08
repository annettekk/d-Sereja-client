import React from "react";
import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaBehanceSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div>
        <h3>Jaga Galganek Inc.</h3>
        <a href={`https://www.behance.net/bakajacagaa403`}>
          <FaBehanceSquare />
        </a>
        <a href={`https://www.instagram.com/jagagalganek/?hl=en`}>
          <AiFillInstagram />
        </a>
      </div>
    </>
  );
}
