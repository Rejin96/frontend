import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import { RiLoginBoxFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="nav-link">
        <Navbar.Brand >Ecomm</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/cart" className="nav-link"><FaCartShopping/>
             <span style={{marginleft : "10px"}}>Cart</span></NavLink>
            <NavLink to="/login" className="nav-link"><RiLoginBoxFill/>
            Login</NavLink> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;