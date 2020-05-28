import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './Home.css'

const ProductCard = props => {
    return (
        <div className="productCard card boxShadow">
            <div className="text">
                <p><b>Product: </b>{props.product.title}</p>
                <p><b>Price: </b>{props.product.price}</p>
                <p><b>Description: </b>{props.product.description}</p>
                <p><b>Quantity: </b>{props.product.quantity}</p>
            </div>
        </div>
    )
}

export default ProductCard