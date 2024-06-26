import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaOpencart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import{useAuth} from "../hooks/useAuth";
import { Button,Badge } from "react-bootstrap";
import {useCart} from "../hooks/useCart";


function Header() {
  const {user,setUser}= useAuth();
  const {cart} = useCart();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="nav-link">
          <Navbar.Brand>Ecomm</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/cart" className="nav-link">
              <FaOpencart />
              <span style={{ marginLeft: "5px" }}>Cart</span>
              {cart.length != 0 && <Badge bg="primary">{cart.length}</Badge>}
            </NavLink>
            { user ?(
              <Button 
              onClick={()=>{
                localStorage.removeItem("token");
                setUser(null);
              }}
              >
                LOGOUT
              </Button>
              
            ): (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;