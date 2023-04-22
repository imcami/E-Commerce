import Item from '../item/Item'
import React from 'react'
const ItemList = ({data}) =>{
    return(
        <div>
            {data.map(prod => <Item key={prod.id} info={prod} /> )}
        </div>
    )
}

export default ItemList