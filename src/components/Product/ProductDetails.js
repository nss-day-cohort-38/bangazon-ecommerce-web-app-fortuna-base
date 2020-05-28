import React, { useEffect, useState } from "react"
import ProductManager from '../../modules/ProductManager'



const ProductDetails = (props) => {

    const [productDetails, setProductDetails] = useState({ id: "", url: "", title: "", price: "", description: "", quantity: "", product_type_id: 0, image_path: "", location: "" })


    useEffect(() => {
        ProductManager.getProduct(props.match.params.ProductId).then(res => setProductDetails(res)).then(console.log(productDetails))
    }, [])

    return (
        <>
            <h3>Product Details</h3>
            <p>Product Name: {productDetails.title}</p>
            <p>Price: {productDetails.price}</p>
            <p>Description: {productDetails.description}</p>
            <p>Quantity: {productDetails.quantity}</p>
            <p>Location: {productDetails.location}</p>
        </>

    )



}

export default ProductDetails