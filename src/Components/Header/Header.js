import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
// import { BiLogIn } from "react-icons/bi";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Profile from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header({ handleCartModal }) {
  const { user } = useAuth0();

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
      <button onClick={() => handleCartModal()}>
        <FiShoppingCart />
      </button>
      <div className="Login">
        {!user && <Login />}
        {user && <Logout />}
      </div>
      <div>
        <Profile />
      </div>
    </header>
  );
}
