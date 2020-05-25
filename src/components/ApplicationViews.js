import { Route, Redirect } from "react-router-dom"
import React from "react"
import Login from "./auth/Login"
import Home from "./Home/Home"
import Register from "./auth/Register"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"

const ApplicationViews = () => {
    return (

        <React.Fragment>
            <Route exact path="/login" render={props => {
                return <Login isAuthenticated={useSimpleAuth.isAuthenticated}  {...props} />
            }}
            />
        </React.Fragment>
    )
}

export default ApplicationViews