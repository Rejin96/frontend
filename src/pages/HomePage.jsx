
import Product from "../components/Product";
import {Row,Col,Container} from "react-bootstrap";
import axios from "axios";
import { useState,useEffect } from "react";
import {useAuth} from '../hooks/useAuth'

function Home(){
    const {id} = useAuth();
    console.log(id);
    const [data,setData] = useState([]);
    useEffect(() => {
        axios
            .get("/api/products")
            .then((resp) => setData(resp.data))
            .catch((err) => console.log("Err",err));
    },[]);
    return (
        <Container>
            <Row>
               { data.map((p) => (
                <Col key={p._id}>
               <Product product={p} />
               </Col>
               ))}
            </Row>
        </Container>
        
        
    );
}
export default Home;