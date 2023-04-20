import React, {useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';

const ItemDetail = (data) =>{
    const [goCart, setGoCart] = useState(false)
    const [addProduct] = CartContext()
   
    const onAdd = (quantity) =>{
        setGoCart(true)
        addProduct(data, quantity)
        console.log(`Compraste ${quantity} unidades`)
    }
    return(
        <div className='container'>
        <div className="detail">
          <img className="detail__image" src={`data.image`} alt=''/>
         
         <div className="content">
            <h1>{data.title}</h1>
           {
              goCart ? <Link to='/cart'>Terminar compra </Link> : <ItemCount stock={30} initial={1} onAdd={onAdd}/>
           }
         </div> 
        
      </div>
      </div>
    )
}

export default ItemDetail
