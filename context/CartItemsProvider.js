import { createContext, useContext, useState } from 'react'

export const CartItemsContext = createContext()

function CartItemsProvider({ children }) {
  const [cartItems, setCartItems] = useState(['test'])
  let cartItemsState = {
    cartItems,
    setCartItems,
  }

  return (
    <CartItemsContext.Provider value={cartItemsState}>
      {children}
    </CartItemsContext.Provider>
  )
}

export default CartItemsProvider
