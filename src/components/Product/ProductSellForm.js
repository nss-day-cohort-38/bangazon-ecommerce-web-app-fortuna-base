import React, { useRef, useState } from "react"



const ProductSellForm = (props) => {

    const [productDetails, setProductDetails] = useState({})

    const handleSellForm = (e) => {
        const stateToChange = { ...productDetails }
        stateToChange[e.target.id] = e.target.value
        setProductDetails(stateToChange)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form" onSubmit={handleSellForm}>
                <h1 className="h3 mb-3 font-weight-normal">Sell Product Form</h1>
                <fieldset>
                    <label htmlFor="inputTitle"></label>
                    <input type="text" id="title" className="form-control" placeholder="Product Title" required autoFocus />
                </fieldset>
            </form>
        </main>
    )

}

export default ProductSellForm