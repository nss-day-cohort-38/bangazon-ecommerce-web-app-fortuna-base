import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import BangazonEcommerce from "./components/BangazonEcommerce"


ReactDOM.render(
  <Router>
      <BangazonEcommerce />
  </Router>
  , document.getElementById('root'))