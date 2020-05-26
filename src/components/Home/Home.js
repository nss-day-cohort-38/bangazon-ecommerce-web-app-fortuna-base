import React, { useEffect, useState, useRef } from "react"
import { Link }from "react-router-dom"

const Home = (props) => {


    return (
        <div>
         <Link to="/sellproductform">Sell a product</Link>
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
        </div>
    )

}

export default Home