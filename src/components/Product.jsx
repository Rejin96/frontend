import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

function Product({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {product.image} />
      <Card.Body>
        <Link to={`/product/${(product.id)}`}>
         <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>
          mosmos
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;