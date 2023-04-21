import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './components/CartContext/CartContext';
import Checkout from './components/checkout/Checkout'
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'
import Error404 from './components/Error/Error404';
import Cart from './components/Cart/Cart';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
   
    <CartProvider>
    <BrowserRouter>
    <div className='app'>
       <NavBar/>
        <Routes>  
          <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Rave!"/>} />
          <Route exact path="/idCategory" element={<ItemListContainer greeting="Bienvenidos a Rave!"/>} />
          <Route exact path="/idProduct" element={<ItemDetailContainer greeting="Bienvenidos a Rave!"/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/cart" element={<Checkout/>} />
          <Route exact path='*' element={<Error404/>} />
        </Routes> 
        </div>
      </BrowserRouter>
    </CartProvider>
 
  )
}

export default App
