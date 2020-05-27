import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const Home = (props) => {

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
        </>
    )
}

export default Home