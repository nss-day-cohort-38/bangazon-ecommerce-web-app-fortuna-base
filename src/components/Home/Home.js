import React, { useEffect, useState, useRef } from "react"
import { Link }from "react-router-dom"
import ProductManager from '../../modules/ProductManager'
import ProductCard from './HomeProductCard'

const Home = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return ProductManager.getAllProducts().then(ProductsFromAPI => {
            setProducts(ProductsFromAPI)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
            <div>
                <Link to="/sellproductform">Sell a product</Link>
            </div>
            <div>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        {...props}
                    />
                ))}
            </div>
        </>
    )

}

export default Home