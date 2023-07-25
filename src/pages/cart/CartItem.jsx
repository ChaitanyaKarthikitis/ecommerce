import React from 'react'
import './Cart.css'
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
const CartItem = (props) => {
    const {updateCartValue, cartItems,addingToCart,removeToCart } = useContext(ShopContext);
  return (
    <div className="cart--item">
      <div className="cart--item--img">
        <img srcSet={props.data.img} alt="" />
      </div>
      <div className="description">
        <p>
          <b>{props.data.productName}</b>
        </p>
        <p>${props.data.price}</p>
        <div className="butttons">
          <button
            className="button--cart"
            onClick={() => {
              addingToCart(props.data.id);
            }}
          >
            +
          </button>
          <input
            id="input--cart"
            onChange={(e) => updateCartValue(Number(e.target.value), props.data.id)}
            type="text"
            value={cartItems[props.data.id]}
          />
          <button
            className="button--cart"
            onClick={() => {
              removeToCart(props.data.id);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem
