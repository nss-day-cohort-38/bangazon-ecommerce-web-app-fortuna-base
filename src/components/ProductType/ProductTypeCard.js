import React, {useEffect} from 'react'

const ProductTypeCard = props => {
    
   const quantityAccumulator = () => {
       let quantityTotal = 0
       props.productType.products.map(product => {
           quantityTotal += product.quantity
       })
       return quantityTotal
   }
   const quantityTotal = quantityAccumulator()
    return (
        <>
        <div>
            <h4>{props.productType.name} ({quantityTotal})  </h4>
            <ul>
                {props.productType.products.slice(0, 3).map(product =>
                   <li onClick={() => props.history.push(`${parseInt(product.url.split('/')[4])}/productdetails`)} key={parseInt(product.url.split('/')[4])}>{product.title}</li>
                    )}
            </ul>
        </div>
        </>
    )
}
export default ProductTypeCard