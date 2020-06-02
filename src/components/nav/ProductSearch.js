import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductManager from "../../modules/ProductManager";
import ProductCard from "../Home/HomeProductCard";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";

const ProductSearch = (props) => {
    const [products, setProducts] = useState([]);

    const handleFieldChange = (evt) => {
        const stateToChange = { ...products };
        stateToChange[evt.target.id] = evt.target.value;
        setProducts(stateToChange);
    };

    useEffect(() => {
        setProducts(props.location.state)
      }, []);

    const { isAuthenticated } = useSimpleAuth();

    return (
        <>
            <div>
                {isAuthenticated() ? (
                <button type="button" className="btn btn-success">
                    <Link to="/sellproductform">Sell a product</Link>
                </button>
                ) : (
                <h3>Please log in to sell a product</h3>
                )}
                <form>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Filter by City"
                    aria-label="Filter by City"
                    onChange={handleFieldChange}
                    id="location"
                ></input>
                </form>
                <input type="submit" value="submit" />
            </div>
            <div>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} {...props} />
                ))}
            </div>
        </>
    )
}

export default ProductSearch

