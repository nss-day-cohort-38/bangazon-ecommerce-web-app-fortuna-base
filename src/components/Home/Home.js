import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
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

    const { isAuthenticated, } = useSimpleAuth()

    return (
        <>
            {
                isAuthenticated() ?
                    <button type = "button" className = "btn btn-success" >
                        <Link to="/sellproductform">Sell a product</Link>
                    </button >
                : <h3>Please log in to sell a product</h3>
            
            }
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