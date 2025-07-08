import { createContext, useState, useEffect, useContext } from 'react'

export const CartContext = createContext()

export const CartProvider= ({children}) => {
   const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart')
    return stored ? JSON.parse(stored) : []
    
   })

  const addToCart = (perfume) => {
  setCartItems((prev) => {
    const exists = prev.find((item) => item.id === perfume.id);

    if (exists) {
      return prev.map((item) =>
        item.id === perfume.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...perfume, quantity: 1 }];
  });
};

const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
};

const decreaseQuantity = (id) => {
    setCartItems((prev) =>
        prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
    );
};

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);




return (
  <CartContext.Provider
    value={{ cartItems, addToCart, removeFromCart, decreaseQuantity }}
  >
    {children}
  </CartContext.Provider>
);

}
export const useCart = () => useContext(CartContext);