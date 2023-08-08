import React from "react";
import "./CartModal.css";

export default function CartModal({ closeCartModal }) {
  return (
    <div className="cartItems closed">
        <div className="itemContainer">
        Your Cart
        <span className="cross" onClick={closeCartModal}>
          X
        </span>

        </div>

    </div>
  )
}
