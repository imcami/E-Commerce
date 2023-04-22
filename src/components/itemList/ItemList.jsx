import React from 'react'
import Item from '../item/Item'


const ItemList = ({data}) =>{
    return(
        <div>
            {data.map(prod => <Item key={prod.id} info={prod} /> )}
        </div>
    )
}

export default ItemList