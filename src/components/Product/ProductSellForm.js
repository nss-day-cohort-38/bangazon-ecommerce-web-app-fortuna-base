import React, { useEffect, useState } from "react"
import ProductTypeManager from "../../modules/ProductTypeManager"
import ProductTypeListOptions from "../ProductType/ProductTypeListOptions"
import ProductManager from '../../modules/ProductManager'

const ProductSellForm = (props) => {
    const [product, setProduct] = useState({ title: "", price: "", description: "", quantity: "", product_type_id: 0, location: ""})
    const [localCheckbox, setLocalCheckbox] = useState(false)
    const [selectOptions, setSelectOptions] = useState([])
    const [image, setImage] = useState({ imageFile: "", image_path: "Choose File"})
    
    

    const handleFieldChange = (evt) => {
        const stateToChange = { ...product }
        stateToChange[evt.target.id] = evt.target.value
        setProduct(stateToChange)
    }

    const toggleFalseTrue = () => {
        setLocalCheckbox(!localCheckbox)
    };

    const handleFileUpload = (evt) => {
        setImage({ imageFile: evt.target.files[0], image_path: evt.target.files[0].name })
    }

    const constructNewProduct = (evt) => {
        evt.preventDefault()

        if (product.title === "" || product.price === "" || product.description === "" || product.quantity === "" || image.imageFile === "") {
            window.alert("Please make sure all fields are filled.")
        } else if (product.product_type_id === 0) {
            window.alert("Please select a product type")
        } else {

            const formData = new FormData()
            formData.append("image_path", image.imageFile, image.image_path)
            formData.append("title", product.title)
            formData.append("price", product.price)
            formData.append("description", product.description)
            formData.append("quantity", product.quantity)
            formData.append("product_type_id", product.product_type_id)
            formData.append("location", product.location)

            ProductManager.addProduct(formData)
                .then(resp => props.history.push(`/${resp.id}/productdetails`))
                
        }
    }

    const handleCancel = () => {
        props.history.push("/")
    }

    const handleFocusSelect = (event) => {
        const stateToChange = { ...product }
        stateToChange.product_type_id = parseInt(event.target.value)
        setProduct(stateToChange)
    }

   

    useEffect(() => {
        ProductTypeManager.getAllProductTypes().then(response => setSelectOptions(response))
    }, [])


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
                    <label>Image File Path</label>
                    <input type="file" id="image_path" onChange={handleFileUpload} required/>
                    {/* <input className="form-control" placeholder="Enter file path for product image" type="text" id="image_path" onChange={handleFieldChange}/> */}
                </fieldset>
                <fieldset>
                    <label>Product Type</label>
                    <select className="custom-select" id="inputGroupSelect01" onChange={handleFocusSelect}>
                        <option value="0" >Please select</option>
                        {selectOptions.length > 0 && selectOptions.map((listObject) => {
                            return <ProductTypeListOptions
                            key={listObject.id}
                            value={listObject.id}
                            listObject={listObject}
                            {...props}
                            />
                        })}
                    </select>
                </fieldset>
                <fieldset>
                    <input className="form-check-input" type="checkbox" value="" onChange={toggleFalseTrue} id="localCheckbox"/>
                    <label className="form-check-label" htmlFor="localCheckbox">Local Delivery Available</label>   
                </fieldset>
                {
                    localCheckbox ?
                    <fieldset>
                        <input type="text" id="location" className="form-control" placeholder="City" onChange={handleFieldChange}/>
                    </fieldset>
                    : null
                }    
                <fieldset>
                    <button type="button" onClick={constructNewProduct}>Sell</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </fieldset>
            </form>
        </main>
    )

}

export default ProductSellForm