import React, { useEffect } from "react";
import "./CartModal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillCartDashFill } from "react-icons/bs";


export default function CartModal({ closeCartModal }) {
  let currentShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
  

  function removeFromCart(photo){
    console.log("removing")
    let updateCart = []
    updateCart = currentShoppingCart
    updateCart.pop(photo)
    localStorage.setItem('shoppingCart', JSON.stringify(updateCart))
  }

  return (
    <div className="cartItems closed">
      <div className="itemContainer">
        Your Cart
        {!currentShoppingCart && <p>Your cart is empty</p>}        
        {currentShoppingCart && currentShoppingCart.map((photo, _id) =>(
          <div className="cartItem" key={_id}>
            <img className="cartPhoto" alt={photo.title} src={require(`../../${photo.photoSrc}`)}></img>
            <p className="cartPhotoTitle">Photo Name: {photo.title}</p>
            <button onClick={() => (removeFromCart(photo))}><BsFillCartDashFill/></button>
          </div>
        ))}
        <span className="cross" onClick={closeCartModal}>
          <AiOutlineCloseCircle />
        </span>
      </div>
    </div>
  );
}
