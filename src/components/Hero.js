import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialMediaLinks from "../constants/SocialMediaLinks"
const query = graphql`
  {
    file(relativePath: { eq: "gabriel.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Hi,</h1>
            <h1>i'm Gabriel</h1>
            <h4> full stack developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialMediaLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
