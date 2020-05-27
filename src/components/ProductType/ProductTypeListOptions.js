import React from "react"


const ProductTypeListOptions = props => {
    const listObject = props.listObject

    if (listObject !== null) 
    return (
        <option value={listObject.id} >{listObject.name}</option>
    )
}

export default ProductTypeListOptions