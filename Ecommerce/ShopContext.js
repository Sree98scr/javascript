import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import all_product from './Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // Initialize cartItems as an empty object

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cart');
        // Assuming response.data.cart is an object where keys are item IDs and values are quantities
        setCartItems(response.data.cart);
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (itemId) => {
    try {
      await axios.post('http://localhost:3000/api/cart', { itemId, quantity: 1 });
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [itemId]: (prevCartItems[itemId] || 0) + 1, // Increment quantity for existing item or add new item with quantity 1
      }));
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      // Optionally, add user feedback or retry logic
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/api/cart/${itemId}`);
      setCartItems((prevCartItems) => {
        const newCartItems = { ...prevCartItems };
        delete newCartItems[itemId]; // Remove item from cart
        return newCartItems;
      });
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
      // Optionally, handle error and provide user feedback
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
