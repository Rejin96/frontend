import React from "react";
import {useParams} from "react-router-dom"

const ProductDetails = ()=>{
    const {productid} = useParams();
    return <div>Productdetail:{productid}</div>
}

export default ProductDetails;