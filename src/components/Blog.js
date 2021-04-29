import React from "react"

import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, title, image, date, category, slug, description }) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4 className="titleDescription">{title}</h4>
          <p className="description-paragraph">{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p> {date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog
