import React, { useEffect, useState } from "react"
import PaymentTypeListOptions  from "../Payment/PaymentTypeOptions"
import OrderManager from "../../modules/OrderManager"
import OrderProductManager from "../../modules/OrderProductManager"
import PaymentTypeManager from "../../modules/PaymentTypeManager"
import HomeProductCard from "../Home/HomeProductCard"

const OrderForm = (props) => {

    const [productsInCart, setProductsInCart] = useState([])
    const [toggleState, setToggleState] = useState(false)
    const [paymentOptions, setPaymentOptions] = useState([])
    const [orderInfo, setOrderInfo] = useState({id: 0, created_at: "", customer_id: 0, payment_type: 0, products:[] })
    


    const handleFocusSelect = (event) => {
        const stateToChange = { ...orderInfo }
        stateToChange.payment_type_id = parseInt(event.target.value)
        setOrderInfo(stateToChange)
    }

    const handleDeleteProduct = (id) => {
        OrderProductManager.deleteProduct(id)
    }

    const handleToggle = () => {
        setToggleState(!toggleState)
    }
    

    useEffect(() => {
        OrderManager.getOrders().then(arrayOfOrders => {
            if (arrayOfOrders.length >= 1) {
                if (arrayOfOrders[0].payment_type_id === null){
                    setOrderInfo(arrayOfOrders[0])
                }
            }
        })
        PaymentTypeManager.getPaymentTypes().then(resp => setPaymentOptions(resp))
    },[])

    useEffect(() => {
        if (orderInfo.customer_id >= 1) {
        setProductsInCart(orderInfo.products)}
    },[orderInfo])


    return (
        <>
            <h3>Current Products in Cart</h3>
            {orderInfo.products.length >= 1
                ?<div>
                    {
                        productsInCart.map(product => {
                            return <HomeProductCard
                            key = {productsInCart.indexOf(product)}
                            product = {product}
                            {...props}
                            />
                        })
                    }
                </div>
                :<p>No items in cart</p>
            }
            <form>
                <fieldset>
                {toggleState !== false
                    ?
                        <select onChange={handleFocusSelect}>
                            {paymentOptions.length === 0
                            ?<option>No payment types available</option>
                            :paymentOptions.map(paymentObject => {
                                return <PaymentTypeListOptions
                                paymentObject ={paymentObject}
                                handleDeleteProduct={handleDeleteProduct}
                                key={paymentObject.id}
                                value={paymentObject.id}
                                {...props}
                            />
                            })}
                        </select>
                    : null
                }
                </fieldset>
                    <fieldset>
                {
                    toggleState !== false
                        ?<button type="button" onClick={() => {OrderManager.completeOrder(orderInfo).then(props.history.push("/"))}}>Done</button>   
                        :<button type="button" onClick={() => handleToggle()}>Complete Order</button>
                }    
                    </fieldset>
            </form>
        </>    
    )

}

export default OrderForm
