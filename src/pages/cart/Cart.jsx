import React from 'react'
import { products } from '../shop/Products'
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
import CartItem from './CartItem';
import { useNavigate  } from 'react-router-dom';
import "./Cart.css";
const Cart = () => {
  const Navigate = useNavigate()
  const { countAmount,cartItems, addingToCart } = useContext(ShopContext);

  const totalAmount = countAmount()
  return (
    <div className="cart">
      <div className="cart--heading">
        <h1>Your Cart</h1>
      </div>
      {/* {id: 3, productName: 'Camera', price: '$2500', img: '/static/media/3.c7785c796d0b2bf5aa2b.png'} */}
      <div className="cart--items">
        {products.map((product) => {
          console.log(cartItems);
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }

          return null;
        })}
      </div>
      {totalAmount > 0 ?
      <div className="cart--checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={()=>Navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      : <h1 className='text-center'>Cart is Empty</h1>}
    </div>
  );
}

export default Cart
