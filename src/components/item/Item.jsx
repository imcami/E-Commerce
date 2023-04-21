import React from 'react'
import './item.css';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

//El parametro es capturado desde ItemList
const Item = ({info}) => {

  
    return(
    <CardGroup>
    <Link to={`/detail/${info.id}`} className="pack">
     <Card style={{ width: '18rem', display: 'flex', padding:'2px' }}>
          <img src={info.img} alt="" />
      <Card.Body>
        <Card.Title>{info.title} </Card.Title>
        <Card.Text>
        <h4 className='description'>{info.description}</h4>
        ${info.price}
        </Card.Text>
        
      
      </Card.Body>
    </Card>
        </Link>
       </CardGroup>
    )
}


export default Item