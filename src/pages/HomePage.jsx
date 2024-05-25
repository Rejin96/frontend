
import Product from "../components/Product";
import {Row,Col,Container} from "react-bootstrap";

const productList = [
    {   
        id : 1,
        title:"Lily",
        description: "Lily are very great for natural healing",
        image:"/images/flower.jpg"
    },
    {
        id : 2,
        title:"Rose",
        description: "roses are red",
        image:"/images/rose.avif"
    },{
        id : 3,
        title:"Sunflower",
        description : "sunflower always points to sun",
        image: "/images/sunflower.avif"
    }
];

function Home(){
    return (
        <Container>
            <Row>
               { productList.map((p) => (
                <Col key={p.id}>
               <Product title={p.title} pic={p.image} />
               </Col>
               ))}
            </Row>
        </Container>
        
        
    );
}
export default Home;