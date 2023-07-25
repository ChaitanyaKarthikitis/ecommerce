import React , {createContext, useState} from "react";
import { products } from "../pages/shop/Products";



const getDefaultCart = ()=>{
    let cart = {}
    for(let i = 1;i<products.length+1;i++){
        cart[i]=0;
    }
    return cart
}

export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart);

    const addingToCart = (itemId)=>{
        setCartItems((prev)=>({ ...prev, [itemId]:prev[itemId]+1}));
    }

    const removeToCart = (itemId) => {
       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }; 

    const updateCartValue = (newAmount , itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount}))
    }

    const countAmount =()=>{
        let totalAmount = 0; 
        for(const item in cartItems){
            if(cartItems[item]>0){
               let itemInfo = products.find((product)=>product.id === Number(item))
                totalAmount += Number(cartItems[item]) * Number(itemInfo.price)
            }

           
        }

        return totalAmount;

    }


    const contextValue = {
      countAmount,updateCartValue,
      cartItems,
      addingToCart,
      removeToCart,
    };
    console.log(cartItems)


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
