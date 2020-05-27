import React from "react"

const PaymentTypeCard = props => {
    return (
        <>
        <article>
            {props.paymentType.merchant_name}<br/>
            {props.paymentType.account_number}<br/>
            {props.paymentType.expiration_date}
            <hr/>
        </article>
        </>
    )
}
 
export default PaymentTypeCard