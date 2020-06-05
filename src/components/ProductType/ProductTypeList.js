import React, {useState, useEffect} from 'react'
import ProductTypeManager from "../../modules/ProductTypeManager"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import ProductTypeCard from "./ProductTypeCard"

const ProductTypeList = (props) => {
    const [productTypes, setProductTypes] = useState([])
    const { isAuthenticated } = useSimpleAuth();


    const allProductTypes = () => {
        if(isAuthenticated()) {
            return ProductTypeManager.getAllProductTypes().then(setProductTypes)
        }
    }

useEffect(() => {
    allProductTypes();
}, []);

return (
    <>
    <main>
        <h1>Product Categories</h1>
        <div>
            {productTypes.map(productType =>
                <ProductTypeCard
                    key={productType.id}
                    productType={productType}
                    {...props}
                    />
                )}
        </div>
    </main>
    </>
)
}
export default ProductTypeList
