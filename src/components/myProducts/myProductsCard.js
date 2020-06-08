import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const MyProductCard = props => {
    return (
        <div className="productCard card boxShadow btn-nice">
            <div className="text">
                <p><b>Product: </b>{props.product.title}</p>
                <p><b>Quantity: </b>{props.product.quantity}</p>
                <p><b>Left: </b>{props.product.quantity}</p>
            </div>
        </div>
    )
}

export default MyProductCard