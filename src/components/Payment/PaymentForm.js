import React, {useState} from "react"
import PaymentTypeManager from "../../modules/PaymentTypeManager"

const PaymentForm = props => {
    const [newPayment, setNewPayment] = useState({ merchant_name: "", account_number: "", expiration_date: "", created_at: "", customer_id: "" })

    const handleFieldChange = (evt) => {
        const stateToChange = { ...newPayment }
        stateToChange[evt.target.id] = evt.target.value
        setNewPayment(stateToChange)
    }

    const handleCancel = () => {
        props.history.push("/payment_types")
    }

    const constructNewPayment = (evt) => {
        evt.preventDefault()

        if (newPayment.merchant_name === "" || newPayment.account_number === "" || newPayment.expiration_date === "") {
            window.alert("Please make sure all fields are filled out.")
        } else {
            
            PaymentTypeManager.addPayment(newPayment)
            .then(props.history.push("/payment_types"))
        }
    }

    return (
        <>
        <article>
        <form className="form">
                <h1 className="h3 mb-3 font-weight-normal">New Payment Information</h1>
                <fieldset>
                    <label >Merchant Name</label>
                    <input type="text" id="merchant_name" className="form-control" placeholder="Merchant Name" onChange={handleFieldChange} required autoFocus />
                </fieldset>
                <fieldset>
                    <label>Account Number</label>
                    <input type="text" id="account_number" className="form-control" placeholder="Account Number" onChange={handleFieldChange} required autoFocus />
                </fieldset>
                <fieldset>
                    <label>Expiration Date</label>
                    <input type="date" id="expiration_date" className="form-control" placeholder="Expiration Date" onChange={handleFieldChange} required autoFocus />
                </fieldset>
                <fieldset>
                    <button type="button" onClick={constructNewPayment}>Submit</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </fieldset>
            </form>
        </article>
        </>
    )
}
 
export default PaymentForm