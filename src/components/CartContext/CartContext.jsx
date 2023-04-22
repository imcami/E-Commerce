import React, { createContext, useState } from 'react'

export const CartContext = createContext([])


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


    function emptyCart(){
        setCartList([])
    }

    // Contador carrito
    const cartCounter = () => {
        return (
            cartList.reduce((prev, prod) => (prev + prod.quantity), 0)
        )
    }
    // Subtotal compra
    const totalBuy = () => {
        return ( 
            cartList.reduce((prev, prod) => (prev + prod.quantity * prod.price), 0)
        )
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeItem,
            emptyCart,
            cartCounter,
            totalBuy
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;