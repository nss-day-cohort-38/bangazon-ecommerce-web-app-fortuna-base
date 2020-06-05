import { Route, } from "react-router-dom"
import React from "react"
import Login from "./auth/Login"
import Home from "./Home/Home"
import Register from "./auth/Register"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import ProductSellForm from "./Product/ProductSellForm"
import ProductDetails from "./Product/ProductDetails"
import MyAccount from "./Payment/MyAccount"
import PaymentForm from "./Payment/PaymentForm"
import PaymentTypeList from "./Payment/PaymentTypeList"
import ProductSearch from "./nav/ProductSearch"
import OrderForm from "./Order/OrderForm"
import ProductTypeList from "./ProductType/ProductTypeList"

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
            <Route exact path="/:ProductId/productdetails" render={props => {
                return <ProductDetails ProductId={parseInt(props.match.params.ProductId)} {...props}/> 
            }}
            />
            <Route exact path="/my_account" render={props => {
                return <MyAccount {...props} />
            }}
            />
            <Route exact path="/payment_types/new" render={props => {
                return <PaymentForm {...props} />
            }}
            />
            <Route exact path="/payment_types" render={props => {
                return <PaymentTypeList {...props} />
            }}
            />
            <Route exact path="/search" render={props => {
                return <ProductSearch {...props} />
            }}
            />
            <Route exact path="/shoppingcart" render={props => {
                return <OrderForm {...props} />
            }}
            />    
            <Route exact path="/categories" render={props => {
                return <ProductTypeList {...props} />
            }}
            />
        </React.Fragment>
    )
}

export default ApplicationViews