import React from "react"
import SocialMediaLinks from "../constants/SocialMediaLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialMediaLinks styleClass="footer-links" />
        <h4>
          copyright&copy;{new Date().getFullYear}
          <span>WebDev</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
