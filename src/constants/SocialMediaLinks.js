import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"

const alldata = [
  {
    id: 0,
    url: "https://www.facebook.com/groups/546149442825819/",
    name: "facebook",
  },

  {
    id: 1,
    url: "https://www.instagram.com/gabrielandy47/",
    name: "instagram",
  },
  {
    id: 2,
    url: "https://twitter.com/FonoGabriel",
    name: "twitter",
  },
  {
    id: 3,

    url: "https://github.com/Gabriel-Andy/",
    name: "github",
  },
]
const gabriel = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "SociauxMedia" } }) {
      nodes {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

const SocialMediaLinks = ({ styleClass }) => {
  const {
    allFile: { nodes },
  } = useStaticQuery(gabriel)

  return (
    <ul
      className={`sociauMediaIcon social-links ${styleClass ? styleClass : ""}`}
    >
      {alldata.map(link => {
        return (
          <li key={link.id}>
            <a href={link.url}>
              <Image
                fixed={nodes[link.id].childImageSharp.fixed}
                alt={link.name}
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialMediaLinks
