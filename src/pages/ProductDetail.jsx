import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container, Image, ListGroup, Badge } from "react-bootstrap";
import Ratings from "../components/Rating";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { productid } = useParams();
  useEffect(() => {
    axios
      .get("/api/products?productId=" + productid)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image src={product.image} />
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item>{product.name}</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
              <ListGroup.Item>
                {product.category}-{product.brand}-${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                {product.countInStock > 0 ? (
                  <Badge bg="info">In Stock</Badge>
                ) : (
                  <Badge bg="danger">Out of Stock</Badge>
                )}
                <Ratings rating={product.rating} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
