import React, {useContext} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import Badge from 'react-bootstrap/Badge';

function CartWidget() {
    const { cart, itemCounter } = useContext(CartContext)

    return (
        <>
            <FaShoppingCart size="2rem" color="white" className="position-relative" /> 
            {cart.length === 0 
            ?
                <span></span>
            :
                <Badge pill bg="danger">{itemCounter()}</Badge>}
        </>
    )
}

export default CartWidget;
