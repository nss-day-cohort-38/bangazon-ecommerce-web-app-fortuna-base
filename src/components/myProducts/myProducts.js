import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductManager from "../../modules/ProductManager";
import MyProductCard from "./myProductsCard";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";

const MyProducts = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return ProductManager.getAllProducts().then((ProductsFromAPI) => {
            setProducts(ProductsFromAPI);
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div>
            {products.map((product) => (
                <MyProductCard key={product.id} product={product} {...props} />
            ))}
            </div>
        </>
    )
}

export default MyProducts