import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext'
import { FaShoppingCart } from 'react-icons/fa';
import CartList from '../cartList/CartList';

function Cart() {

    const { cartList } = useContext(CartContext)

    return (
        <>
          
            {cartList.length === 0
            ? 
                <div className="container mt-5">
                    <div className="row text-center justify-content-center">
                        <h3 className="my-5"><strong>No hay productos en tu carrito <FaShoppingCart/></strong></h3>
                        <h4 className="my-5">¿Qué te parece si agregás algunos?</h4>
                        <Link className="btn btn-danger bg-gradient w-25" to="/">
                           Seguir comprando
                        </Link>
                    </div>
                </div>
            :
                <CartList />
            }
        </>
    )
}

export default Cart