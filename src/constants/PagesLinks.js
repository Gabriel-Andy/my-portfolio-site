import React from "react"
import { Link } from "gatsby"
import uuid from "react-uuid"

const data = [
  {
    id: uuid(),
    text: "home",
    url: "/",
  },
  {
    id: uuid(),
    text: "about",
    url: "/about",
  },
  {
    id: uuid(),
    text: "projects",
    url: "/projects",
  },
  {
    id: uuid(),
    text: "education",
    url: "/education",
  },
  {
    id: uuid(),
    text: "blog",
    url: "/blog ",
  },
  {
    id: uuid(),
    text: "contact",
    url: "/contact",
  },
]
const allLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
const PagesLinks = ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>{allLinks}</ul>
  )
}

export default PagesLinks


