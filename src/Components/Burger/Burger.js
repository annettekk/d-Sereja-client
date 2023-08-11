import React from "react";
import "./Burger.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function Burger() {
  const { user } = useAuth0();
  return (
    <Menu className="my-menu" width={"100vw"} isOpen={false} noOverlay right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/gallery">
        Gallery
      </a>
      <a className="menu-item" href="/admin">
        {user &&
          (user.email === process.env.REACT_APP_EMAIL ||
            user.email === process.env.REACT_APP_EMAIL2 ||
            user.email === process.env.REACT_APP_EMAIL3 ||
            user.email === process.env.REACT_APP_EMAIL4) && (
            <Link className="link" to="/admin">
              Admin
            </Link>
          )}
      </a>
    </Menu>
  );
}
