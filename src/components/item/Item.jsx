import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';



//El parametro es capturado desde ItemList

const Item = ({info}) => {
    return(
        <Link to={`detail/${id}`} className="pack">
             <img src={info.img} alt='' />
             <p>{info.title} </p>
             <p>{info.description} </p>
             <p>${info.price} </p>
        </Link>
    )
}

export default Item;