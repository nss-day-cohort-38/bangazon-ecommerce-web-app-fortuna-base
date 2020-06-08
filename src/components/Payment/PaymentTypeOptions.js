import React from "react"


const PaymentTypeListOptions = props => {
    const paymentObject = props.paymentObject

    if (paymentObject !== null) 
    return (
    <option value={paymentObject.id} >{paymentObject.merchant_name} {paymentObject.account_number}</option>
    )
}

export default PaymentTypeListOptions