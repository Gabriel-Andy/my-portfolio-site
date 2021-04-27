import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
// import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { title, description } = data.blog
  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            {console.log(data)}
            <p>{title}</p>
            <p>{description}</p>
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

// `
export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      body {
        description
        id
        title
      }
      conclusion {
        description
        id
        shareLinks
      }
      description
      title
      introduction {
        description
        id
        titleImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
export default ComponentName
