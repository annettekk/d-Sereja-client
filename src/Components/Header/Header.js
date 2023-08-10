import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Burger from "../Burger/Burger";

export default function Header({ handleCartModal }) {
  const { user } = useAuth0();

  return (
    <header>

      <div className="container">
      <Burger />
        <h1>Jaga Galganek Photography</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="navLi">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="navLi">
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li className="navLi">
              <Link className="link" to="/gallery">
                Gallery
              </Link>
            </li>
            {user &&
              (user.email === process.env.REACT_APP_EMAIL ||
                user.email === process.env.REACT_APP_EMAIL2 ||
                user.email === process.env.REACT_APP_EMAIL3 ||
                user.email === process.env.REACT_APP_EMAIL4) && (
                <li className="navLi">
                  <Link className="link" to="/admin">
                    Admin
                  </Link>
                </li>
              )}
          </ul>
        </nav>

        <button className="cartButton" onClick={() => handleCartModal()}>
          <FiShoppingCart />
        </button>
        <div className="login">
          {!user && (
            <div>
               <Login />
            </div>
          )}
          {user &&  <Logout />}
        </div>
      </div>
    </header>
  );
}
