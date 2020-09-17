import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
const Home = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs title="experience" />
      <Projects projects={projects} title="featured projects" showLinks />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          name
          id
        }
      }
    }
  }
`

export default Home
