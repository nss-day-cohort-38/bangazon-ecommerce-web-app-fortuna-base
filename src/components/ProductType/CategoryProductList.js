import React, {useState, useEffect} from "react"
import CategoryProductCard from "./CategoryProductCard"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import ProductTypeManager from "../../modules/ProductTypeManager"

const CategoryProductList = (props) => {
    const [productType, setProductType] = useState("")
    const [products, setProducts] = useState([])
    const { isAuthenticated } = useSimpleAuth();

    const getTypeById = () => {
        if(isAuthenticated()) {
            return ProductTypeManager.getTypeById(props.productTypeId)
                .then(resp => {
                    setProductType(resp)
                    setProducts(resp.products)
                })
        }
    }

    useEffect(() => {
        getTypeById()
    }, [])
    return (
        <>
        <main>
            <h1>{productType.name}</h1>
            <div>
                {products.map(product =>
                    <CategoryProductCard
                    key={product.url}
                    productType={productType}
                    product={product}
                    {...props}
                    />)}
            </div>
        </main>
        </>
    )
}
export default CategoryProductList