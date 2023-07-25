import React, { useContext } from 'react'
import './Product.css';
import { ShopContext } from '../../context/shop-context';

const Product = (props) => {
    const {id,productName,img,price} = props.data;
    const { cartItems,addingToCart } = useContext(ShopContext);
    const cartamount =  cartItems[id]
  return (
    <div className="product--item">
      <div className="product--img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="product--name">
        <p>
          <b>{productName}</b>
        </p>
      </div>
      <div className="product--price">
        <p>${price}</p>
      </div>
      <button className="addToCart" onClick={() => addingToCart(id)}>
        Add To Cart {cartamount>0 && <>({cartamount})</>}
      </button>
    </div>
  );
}

export default Product
