import React from "react"
import Navbar from "./NavBar"
import "../css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
