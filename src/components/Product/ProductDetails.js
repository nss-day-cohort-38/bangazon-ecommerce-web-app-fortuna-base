import React, { useEffect, useState } from "react"




const ProductDetails = (props) => {

    const [productDetails, setProductDetails] = useState({ title: "", price: "", description: "", quantity: "", product_type_id: 0, image_path: "", location: ""  })


    useEffect(() => {
        
    },[])

    return (
        <h3>Product Details</h3>

    )



}

export default ProductDetails