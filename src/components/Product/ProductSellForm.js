import React, { useEffect, useState } from "react"
import ProductTypeManager from "../../modules/ProductTypeManager"
import ProductTypeListOptions from "../ProductType/ProductTypeListOptions"
import ProductManager from '../../modules/ProductManager'

const ProductSellForm = (props) => {
    const [product, setProduct] = useState({ title: "", price: "", description: "", quantity: "", product_type_id: "" })
    const [selectOptions, setSelectOptions] = useState([])
    const [listId, setListId] = useState({ id: 0 })
    
    const handleFieldChange = (evt) => {
        const stateToChange = { ...product }
        stateToChange[evt.target.id] = evt.target.value
        setProduct(stateToChange)
    }

    const constructNewProduct = (evt) => {
        evt.preventDefault()

        if (product.title === "" || product.price === "" || product.description === "" || product.quantity === "") {
            window.alert("Please make sure all fields are filled.")
        } else {
            // remove line below
            product.product_type_id = 1
            ProductManager.addProduct(product)
            .then(props.history.push("/"))
        }
    }

    const handleCancel = () => {
        props.history.push("/")
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
        setProduct.product_type_id = listId.id
    }, [listId])

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form">
                <h1 className="h3 mb-3 font-weight-normal">Sell Product Form</h1>
                <fieldset>
                    <label htmlFor="inputTitle">Title</label>
                    <input type="text" id="title" className="form-control" placeholder="Product Title" onChange={handleFieldChange} required autoFocus />
                </fieldset>
                <fieldset>
                    <label>Price</label>
                    <input type="text" id="price" className="form-control" placeholder="Product Price" onChange={handleFieldChange} required />
                </fieldset>
                <fieldset>
                    <label>Description</label>
                    <input type="text" id="description" className="form-control" placeholder="Product Description" onChange={handleFieldChange} required />
                </fieldset>
                <fieldset>
                    <label>Quantity</label>
                    <input type="text" id="quantity" className="form-control" placeholder="Product Quantity" onChange={handleFieldChange} required />
                </fieldset>
                <fieldset>
                    <select className="custom-select" id="inputGroupSelect01" onChange={handleFocusSelect}>
                        {selectOptions.length > 0 && selectOptions.map((listObject) =>{
                            return <ProductTypeListOptions
                            key={listObject.id}
                            value={listObject.id}
                            listObject={listObject}
                            {...props}
                        />})}
                    </select>
                </fieldset>    
                <fieldset>
                    <button type="button" onClick={constructNewProduct}>Submit</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </fieldset>
            </form>
        </main>
    )

}

export default ProductSellForm