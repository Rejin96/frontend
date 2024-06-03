import React from "react";
import { useCart } from "../hooks/useCart";
import { Container, Row, Col, ListGroup, Image,Button } from "react-bootstrap";

const CartPage = () => {
  const { cart, dispatch } = useCart();
  return (
    <Container>
      <ListGroup>
        {cart.map((c) => (
          <ListGroup.Item>
            <Row>
              <Col md={2}>
                <Image src={c.image} fluid rounded />
              </Col>
              <Col md={6}>
                <h4>{c.name}</h4>
                <span className="text-muted">Qty: {c.qty}</span>
              </Col>
              <Col md={4}>
                <Button variant="danger">-</Button>
                <span className="mx-2">{c.qty}</span>
                <Button variant="success">+</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CartPage;
