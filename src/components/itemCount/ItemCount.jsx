import React, { useState, useEffect } from 'react';
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(parseInt(initial))
  const add = () =>{
    setCount(count + 1);
  }
  const subtract = () =>{
    if (count > 1 ){
      setCount(count - 1)
    }
  }

  useEffect(()=>{
    setCount(parseInt(initial))
  })
    return(
      //Indicamos que el boton + / - se desahabiliten y habiliten segun los parametros que le pasamos mediante disabled y onClick
      //El boton agregar al carrito se desabilita cuando llega al maximo de 30 porque le indicamos que el stock disponible es < o = a 30
     <div className="counter">
      <button disabled={ count <=1 } className="counter__button" onClick={subtract}>-</button> 
      <span className="counter__number">{count}</span>
      <button disabled={count >= stock} className="counter__button" onClick={add}>+</button>
      <div>
          <button disabled={stock<=30} onClick={(()=> onAdd(count))} className='add' >Agregar al carrito</button>
      </div>
  </div>
    )
}

export default ItemCount;