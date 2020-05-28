import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductManager from "../../modules/ProductManager";
import ProductCard from "./HomeProductCard";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [locationFilter, setLocationFilter] = useState({ location: "" });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...locationFilter };
    stateToChange[evt.target.id] = evt.target.value;
    setLocationFilter(stateToChange);
  };

  const getProducts = () => {
    return ProductManager.getAllProducts().then((ProductsFromAPI) => {
      setProducts(ProductsFromAPI);
    });
  };

  const searchUseEffect = () => {
    getFilteredProducts(locationFilter.location);
  };

  const getFilteredProducts = (location) => {
    return ProductManager.getFilteredProducts(location).then(
      (ProductsFromAPI) => {
        setProducts(ProductsFromAPI);
      }
    );
  };

  useEffect(() => {
    getProducts();
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
        <input type="submit" value="submit" onClick={searchUseEffect} />
      </div>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} {...props} />
        ))}
      </div>
    </>
  );
};

export default Home;
