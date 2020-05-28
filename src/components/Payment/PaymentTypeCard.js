import React from "react"

const PaymentTypeCard = props => {
    return (
        <>
        <article>
           Merchant Name: {props.paymentType.merchant_name}<br/>
           Account Number: {props.paymentType.account_number}<br/>
           Expiration Date: {props.paymentType.expiration_date}<br/>
           <button onClick={() => {props.deletePaymentType(props.paymentType.id)}} >Delete</button>
            <hr/>
        </article>
        </>
    )
}
 
export default PaymentTypeCard