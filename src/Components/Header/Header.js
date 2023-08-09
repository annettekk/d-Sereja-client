import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Profile from "../Profile/Profile";

export default function Header({ handleCartModal }) {
  return (
    <header>
      <h1>Jaga Galganek Photography</h1>
      <nav>
        <ul>
          <li className="navLi">
            {" "}
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="navLi">
            {" "}
            <Link className="link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="navLi">
            {" "}
            <Link className="link" to={"/gallery"}>
              Gallery
            </Link>
          </li>
          <li className="navLi">
            {" "}
            <Link className="link" to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <span className="login">
        Log in <BiLogIn />
      </span>
      <button onClick={() => handleCartModal()}>
        <FiShoppingCart />
      </button>
      <div className="Login">
        <h1>Log In</h1>
        <Login />
        <Logout />
      </div>
      <div>
        <Profile />
      </div>
    </header>
  );
}
