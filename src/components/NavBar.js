import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PagesLinks from "../constants/PagesLinks"
import logo from "../assets/logo.svg"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PagesLinks styleClass="nav-links"></PagesLinks>
      </div>
    </nav>
  )
}

export default NavBar
