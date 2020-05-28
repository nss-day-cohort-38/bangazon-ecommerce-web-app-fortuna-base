import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"


const NavBar = props => {
    const { isAuthenticated, logout } = useSimpleAuth()

    return (
        <>
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/payment_types">My Account</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/myitinerary">My Itinerary</Link>
                    </li> */}
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
                </ul>
                <form style={{marginRight: "20px"}}>
                    <input type="text" placeholder="Search Products" style={{marginRight: "7px"}}></input>
                    <button type="submit">Search</button>
                </form>
            </nav>
        </>
    )
}

export default NavBar
