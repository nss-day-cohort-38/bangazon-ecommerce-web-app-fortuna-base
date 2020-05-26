import { Route, } from "react-router-dom"
import React from "react"
import Login from "./auth/Login"
import Home from "./Home/Home"
import Register from "./auth/Register"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import ProductSellForm from "./Product/ProductSellForm"

const ApplicationViews = () => {
    return (

        <React.Fragment>
            <Route exact path="/" render={props => {
                return <Home isAuthenticated={useSimpleAuth.isAuthenticated}  {...props} />
            }}
            />
            <Route exact path="/login" render={props => {
                return <Login isAuthenticated={useSimpleAuth.isAuthenticated}  {...props} />
            }}
            />
            <Route exact path="/register" render={props => {
                return <Register {...props} />
            }}
            />
            <Route exact path="/sellproductform" render={props => {
                return <ProductSellForm {...props} />
            }}
            />
        </React.Fragment>
    )
}

export default ApplicationViews