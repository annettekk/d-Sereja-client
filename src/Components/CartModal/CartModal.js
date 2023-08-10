import React, { useEffect, useState } from "react";
import "./CartModal.css";
import { BsFillCartDashFill } from "react-icons/bs";
import Profile from "../Profile/Profile";


export default function CartModal({ closeCartModal }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shoppingCart'));
    setCart(data)
    console.log(data)
  }, [])


  const deleteFromCart = value => {
    setCart(oldValues => {
      const newValues = oldValues.filter(photo => photo !== value)
      localStorage.setItem('shoppingCart', JSON.stringify(newValues))
      return newValues
    })
  }

  

  return (
      <div className="itemContainer">
        <div className="cart">
          <span className="closeButton" onClick={closeCartModal}>
            X
          </span>
          <h3>Cart</h3>
          <Profile/>
          {!cart && <p>Your cart is empty</p>}        
          {cart && cart.map((photo, _id) =>(
            <div className="cartItem" key={_id}>
              <img className="cartPhoto" alt={photo.title} src={require(`../../${photo.photoSrc}`)}></img>
              <p className="cartPhotoTitle">Photo Name: {photo.title}</p>
              <button className="deleteCartItem" onClick={() => (deleteFromCart(photo))}><BsFillCartDashFill/></button>
            </div>
          ))}

        </div>
      </div>
  );
}
