import React from "react";
import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaBehanceSquare } from "react-icons/fa";
import { GiHealthPotion } from "react-icons/gi";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h5 className="footerName">
          Made with <GiHealthPotion /> by: Baba-Yaga Coding Team&copy;
        </h5>
        <div className="icons">
          <a className="bh" href={`https://www.behance.net/bakajacagaa403`}>
            <FaBehanceSquare />
          </a>
          <a
            className="ins"
            href={`https://www.instagram.com/jagagalganek/?hl=en`}
          >
            <AiFillInstagram />
          </a>
        </div>
      </footer>
    </>
  );
}
