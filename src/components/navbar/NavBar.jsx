import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../cartWidget/CartWidget';
import ItemCount from '../itemCount/ItemCount';


const NavBar = ({ItemCount}) => {
	return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                           <h1>RAVE</h1>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="align-items-center">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                            <NavLink className="nav-link" to="/idCategory">
                               Planes
                            </NavLink>
                            
                        </Nav>
                    </Navbar.Collapse>
                    <Link className="cart-desktop" to="/cart">
                        <CartWidget ItemCount={ItemCount} />
                    </Link> 
                </Container>
            </Navbar>
        </>
	);
};

export default NavBar;