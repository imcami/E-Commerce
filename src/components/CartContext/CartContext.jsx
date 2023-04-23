import React, { createContext, useState } from 'react'


export const CartContext = createContext({
    cartList: [],
    addToCart: () => {},
    removeItem: () => {},
    emptyCart: () => {},
    cartCounter: () => 0,
    totalBuy: () => 0,
})

const CartContextProvider = ({children}) => {

    
    const [cartList, setCartList] = useState([])

    function addToCart(product){

        const index = cartList.findIndex(i => i.id === product.id)

        if (index > -1) {
            const oldItem = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, {...product, quantity: product.quantity + oldItem}])
        } else {
            setCartList([...cartList, product])
        }
    }

    const removeItem = (id) => {
        const filteredCart = cartList.filter((product) => product.id !== id)
        setCartList(filteredCart)
      }    
    
    const emptyCart = () => {
    setCartList([])
  }


    // Contador carrito
    const cartCounter = () => {
        const sumQuantity = (accumulator, product) => accumulator + product.quantity
        return cartList.reduce(sumQuantity, 0)
      }
    
      const totalBuy = () => {
        const sumPrice = (accumulator, product) => accumulator + product.quantity * product.price
        return cartList.reduce(sumPrice, 0)
      }

      const contextValue = {
        cartList,
        addToCart,
        removeItem,
        emptyCart,
        cartCounter,
        totalBuy,
      }
    
      return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
    }

export default CartContextProvider;