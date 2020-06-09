import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import '../Home/Home.css'

const OrderFormCard = props => {
    return (
        <div className="productCard card boxShadow btn-nice">
            <div className="text">
                <p><b>Product: </b>{props.productObject.product.title}</p>
                <p><b>Price: </b>{props.productObject.product.price}</p>
                <p><b>Description: </b>{props.productObject.product.description}</p>
                <p><b>Quantity: </b>{props.productObject.product.quantity}</p>
            </div>
        </div>
    )
}

export default OrderFormCard