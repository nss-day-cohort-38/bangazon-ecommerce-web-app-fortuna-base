import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductManager from "../../modules/ProductManager";
import ProductCard from "./HomeProductCard";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import "./Home.css"

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
          <div className="sellProdBtn text-center">
            <button type="button" className="btn btn-primary btn-nice">
              <Link className="sellProdBtn" to="/sellproductform">Sell a product</Link>
            </button>
          </div>
        ) : (
          <h3>Please log in to sell a product</h3>
        )}
        <div className="">
          <form className="form">
            <input
              className="form-control locationSearch btn-nice"
              type="text"
              placeholder="Filter by City"
              aria-label="Filter by City"
              onChange={handleFieldChange}
              id="location"
            ></input>
          </form>
          <input type="submit" value="Submit" className="btn btn-info btn-nice" onClick={searchUseEffect} />
        </div>
      </div>
      <div className="prodCardFlex">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} {...props} />
        ))}
      </div>
    </>
  );
};

export default Home;
