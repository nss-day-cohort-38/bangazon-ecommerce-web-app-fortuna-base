import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const MyProductCard = props => {
    return (
        <div className="productCard card boxShadow btn-nice">
            <div className="text">
                <p><b>Product: </b>{props.product.title}</p>
                <p><b>Quantity: </b>{props.product.quantity - props.product.orders.length}</p>
                <p><b>Number Sold: </b>{props.product.orders.length}</p>
            </div>
        </div>
    )
}

export default MyProductCard