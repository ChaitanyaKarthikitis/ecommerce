import React from 'react'
import {products} from './Products';
import Product from './Product'
import "./Product.css";

const Shop = () => {
    
  return (
    <div>
        {/* shop name */}
      <div className="shopName">
        <h1>Chaitanya's EBazaar</h1>
        <div className="products--list">
            {products.map((product)=><Product data={product}/>)}
        </div>
      </div>

    </div>
  );
}

export default Shop
