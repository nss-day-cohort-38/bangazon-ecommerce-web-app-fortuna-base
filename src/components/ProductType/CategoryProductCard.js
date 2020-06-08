import React from "react"
import { useHistory } from "react-router-dom";


const CategoryProductCard = props => {
    const history = useHistory();

    const routeChange = () =>{ 
    let path = `${parseInt(props.product.url.split('/')[4])}/productdetails`; 
    history.replace("")
    history.push(path);
  }
    return (
        <>

        <h4 key={parseInt(props.product.url.split('/')[4])} onClick={ routeChange} >{props.product.title} ({props.product.quantity}) ${props.product.price}</h4>
        </>
    )
}
export default CategoryProductCard