import React from "react"
import PagesLinks from "../constants/PagesLinks"
import SocialMediaLinks from "../constants/SocialMediaLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <PagesLinks styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialMediaLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
