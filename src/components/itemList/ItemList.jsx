import Item from '../item/Item'
import React from 'react'
const ItemList = ({data}) =>{
    return(
        <div>
            {data.map(products => <Item key={products.id} info={products} /> )}
        </div>
    )
}

export default ItemList