import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const home = () => {
  const {
    allStrapiJobs: { nodes: jobs },
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <SEO title="home" description=" this is our home page" />
      <Hero />
      <Services />
      <Jobs title="experience" />
      <Projects projects={projects} title="featured projects" showLink /> 
       <Blogs blogs={blogs} title="blogs" showLink />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
     data:nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
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
allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
  nodes {
    slug
    content
    description
    date(formatString: "MMMM, Do,YYYY")
    id
    title
    category
    image {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`
export default home



