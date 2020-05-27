import React, { useEffect, useState } from "react"
import ProductTypeManager from "../../modules/ProductTypeManager"
import ProductTypeListOptions from "../ProductType/ProductTypeListOptions"

const ProductSellForm = (props) => {

    const [productDetails, setProductDetails] = useState({})
    const [selectOptions, setSelectOptions] = useState([])
    const [listId, setListId] = useState({ id: 0 })

    const handleSellForm = (e) => {
        const stateToChange = { ...productDetails }
        stateToChange[e.target.id] = e.target.value
        setProductDetails(stateToChange)
    }

    const handleFocusSelect = (event) => {
        const stateToChange = { ...listId }
        stateToChange.id = parseInt(event.target.value)
        setListId(stateToChange)
    }

    useEffect(() => {
        ProductTypeManager.getAllProductTypes().then(response => setSelectOptions(response))
    }, [])

    useEffect(()=> {
        setProductDetails.product_type_id = listId.id
    }, [listId])

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form" onSubmit={handleSellForm}>
                <h1 className="h3 mb-3 font-weight-normal">Sell Product Form</h1>
                <fieldset>
                    <label htmlFor="inputTitle"></label>
                    <input type="text" id="title" className="form-control" placeholder="Product Title" required autoFocus />
                </fieldset>
                <select className="custom-select" id="inputGroupSelect01" onChange={handleFocusSelect}>
                    {selectOptions.length > 0 && selectOptions.map((listObject) =>{
                        return <ProductTypeListOptions
                        key={listObject.id}
                        value={listObject.id}
                        listObject={listObject}
                        {...props}
                    />})}
                </select>
            </form>
        </main>
    )

}

export default ProductSellForm