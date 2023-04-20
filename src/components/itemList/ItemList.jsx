import Item from '../item/Item'


const ItemList = ({info}) =>{
    return(
        <div>
            {data.map(products => <Item key={products.id} info={products} /> )}
        </div>
    )
}

export default ItemList;
