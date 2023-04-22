import React from 'react'
import './item.css';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

//El parametro es capturado desde ItemList
const Item = ({prod}) => {

  
    return(
    <CardGroup className=''>
     <Card style={{ display:'flex', padding:'2px' }}>
          < img className='card-img-top' src={prod.img} alt="" />
      <Card.Body>
        <Card.Title>{prod.title} </Card.Title>
        <Card.Text>
        <h4 className='description'>{prod.description}</h4>
        ${prod.price}
        </Card.Text>
        <Link to={`/detail/${prod.id}`}>
                        <button className="btn btn-warning  bg-gradient">Añadir al carrito 🛒 </button>
                    </Link>
      
      </Card.Body>
    </Card>
    </CardGroup >
    
    )
}


export default Item