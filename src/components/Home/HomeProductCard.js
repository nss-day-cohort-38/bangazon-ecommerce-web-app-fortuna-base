import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './Home.css'

const ProductCard = props => {
    return (
        <div className="productCard card container margin-top">
            <div className="text">
                <p>{props.product.title}</p>
                <p>{props.product.price}</p>
                <p>{props.product.description}</p>
                <p>{props.product.quantity}</p>
                <p>{props.product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard