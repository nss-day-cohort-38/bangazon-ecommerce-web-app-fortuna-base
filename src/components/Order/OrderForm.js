import React, { useEffect, useState } from "react"
import PaymentTypeListOptions  from "../Payment/PaymentTypeOptions"
import OrderManager from "../../modules/OrderManager"
import OrderProductManager from "../../modules/OrderProductManager"
import PaymentTypeManager from "../../modules/PaymentTypeManager"
import OrderFormCard from "./OrderFormCard"

const OrderForm = (props) => {

    const [productsInCart, setProductsInCart] = useState([])
    const [allOrderProducts, setAllOrderProducts] = useState([])
    const [displayedOrder, setDisplayedOrder] = useState({order_id:0})
    const [toggleState, setToggleState] = useState(false)
    const [paymentOptions, setPaymentOptions] = useState([])
    const [orderInfo, setOrderInfo] = useState({id: 0, payment_type: 0})
    
    


    const handleFocusSelect = (event) => {
        const stateToChange = { ...orderInfo }
        stateToChange.payment_type = parseInt(event.target.value)
        setOrderInfo(stateToChange)
    }

    const handleDeleteProduct = (id) => {
        OrderProductManager.deleteProduct(id)
    }

    const handleToggle = () => {
        setToggleState(!toggleState)
    }

    const filterForOrder = () => {
        const filteredOrders = allOrderProducts.filter(listObject => {
                return listObject.order.payment_type === null
                    
                }
        )
        setProductsInCart(filteredOrders)
        
    }

    const handleCancelOrder = (id) => {
        OrderManager.deleteOrder(id)
        .then(() => {  
        OrderProductManager.getAllOrderProducts().then(resp => setAllOrderProducts(resp))
        })
    }

    useEffect(() => {
        filterForOrder()
    },[allOrderProducts])

    useEffect(() => {
        const stateToChange = {...orderInfo}
        if (productsInCart.length !== 0) {
        setDisplayedOrder(parseInt(productsInCart[0].order_id))
        stateToChange.id = parseInt(productsInCart[0].order_id)
        setOrderInfo(stateToChange)    
    }
    },[productsInCart])
    
    useEffect(() => {
        OrderProductManager.getAllOrderProducts().then(resp => setAllOrderProducts(resp))
        
        PaymentTypeManager.getPaymentTypes().then(resp => setPaymentOptions(resp))
    },[])

    return (
        <>
            <h3>Current Products in Cart</h3>
            {productsInCart.length >= 1
                ?<div>
                    {
                        productsInCart.map(product => {
                            return <OrderFormCard
                            key = {product.product_id}
                            productObject = {product}
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
                            <option>Select a card</option>
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
                    <fieldset>
                        <button type="button" onClick={() => {handleCancelOrder(orderInfo.id)}}>Cancel Order</button>
                    </fieldset>
            </form>
        </>    
    )

}

export default OrderForm
