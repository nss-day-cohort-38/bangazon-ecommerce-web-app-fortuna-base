import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import ProductManager from "../../modules/ProductManager";

const NavBar = props => {
    const { isAuthenticated, logout } = useSimpleAuth()
    const [productFilter, setProductFilter] = useState({ product: "" })

    const handleFieldChange = (evt) => {
        const stateToChange = { ...productFilter };
        stateToChange[evt.target.id] = evt.target.value;
        setProductFilter(stateToChange);
    }

    const searchProducts = () => {
        getProductsByName(productFilter.product).then((productsFromAPI) => {
            console.log(productsFromAPI)
            props.history.push({
                pathname: "/search",
                state: productsFromAPI
            })
        })
    }

    const getProductsByName = (product) => {
        return ProductManager.getProductByNameFilter(product)
    }

    return (
        <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/my_account">My Account</Link>
                </li>
                {
                    isAuthenticated() ?
                        <li className="nav-item">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    logout()
                                    props.history.push({
                                        pathname: "/"
                                    })
                                }
                                }
                            >Logout</button>
                        </li> :
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        </>
                }
                <form>
                    <input  type="text" placeholder="Search Products" onChange={handleFieldChange} id="product"/>
                </form>
                <input type="submit" value="submit" onClick={searchProducts}/>
            </ul>
        </nav>
    )
}

export default NavBar
