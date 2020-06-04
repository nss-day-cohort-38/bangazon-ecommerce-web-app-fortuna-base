import React, { useEffect, useState } from "react"
import PaymentTypeListOptions  from "../Payment/PaymentTypeOptions"
import OrderManager from "../../modules/OrderManager"


const OrderForm = (props) => {

    const [productsInCart, setProductsInCart] = useState([])
    const [toggleState, setToggleState] = useState(false)
    const [paymentOptions, setPaymentOptions] = useState([])
    const [orderInfo, setOrderInfo] = useState({id: "", created_at: "", customer_id: "", payment_type_id: "" })


    const handleToggle = () => {
        setToggleState(!toggleState)
    }

    const handleFocusSelect = (event) => {
        const stateToChange = { ...orderInfo }
        stateToChange.payment_type_id = parseInt(event.target.value)
        setOrderInfo(stateToChange)
    }

    

    useEffect(() => {
        OrderManager.getOrders().then(arrayOfOrders => {
            if (arrayOfOrders.length >= 1) 
        })
    },[])

    return (
        <>
            <h3>Current Products in Cart</h3>
            {/* <ul>
                {productsInCart.map(productObject =>{
                    return <ListProduct productObject = {productObject} {...props} />
                })}
            </ul>     */}
            
            <form>
                {handleToggle == true
                    ?<fieldset>
                        <select onChange={handleFocusSelect}>
                            {paymentOptions.length == 0
                            ?<option>No payment types available</option>
                            :paymentOptions.map(paymentObject => {
                                return <PaymentTypeListOptions 
                                paymentObject = {paymentObject}
                                key={paymentObject.id}
                                value={paymentObject.id}
                                {...props}
                            />
                            })}
                        </select>
                    </fieldset>
                    : null
                }
                <fieldset>
                    {handleToggle == false
                    ?<button type="button" onClick={handleToggle}>Complete Order</button>
                    :<button type="button" onClick={() => {
                        OrderManager.completeOrder(orderInfo).then(props.history.push("/"))
                    }}>Done</button>
                    }
                </fieldset>
            </form>
        </>    
    )

}

export default OrderForm
