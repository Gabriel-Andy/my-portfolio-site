import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Image from "gatsby-image"
import Title from "../components/Title"
import SocialMediaLinks from "../constants/SocialMediaLinks"

const ComponentName = ({ data }) => {
  const { blog } = data

  if (!blog) {
    return (
      <div className="error">
        <h3>no such blog could be found...</h3>
        <Link to="/blog/" className="btn-primary">
          back to blogs
        </Link>
      </div>
    )
  }
  const { title, description, introduction, body, conclusion } = blog
  const Introduction = () => {
    const Intro = introduction.map(uniqueIntro => {
      const { description, id, titleImage } = uniqueIntro
      return (
        <div key={id}>
          <div>
            {" "}
            {titleImage && <Image fixed={titleImage.childImageSharp.fixed} />}
          </div>
          <p className="description-paragraph">{description}</p>
        </div>
      )
    })
    return Intro
  }
  const bodies = () => {
    const bodyIntro = body.map(uniquebody => {
      const { id, title, description, titleImage } = uniquebody
      return (
        <div>
          <div key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
              {" "}
              {titleImage && <Image fixed={titleImage.childImageSharp.fixed} />}
            </div>
          </div>
        </div>
      )
    })
    return bodyIntro
  }

  const conclusions = () => {
    const conclusionIntro = conclusion.map(item => {
      const { description, id, shareLinks } = item
      return (
        <div>
          <p key={id} className="description-paragraph">
            {description}
          </p>

          {shareLinks && (
            <>
              <p>
                {" "}
                thanks for reading this article, you can checkout one of my
                sites here at{" "}
              </p>
              <a href={shareLinks}></a>
              <p>
                also, I am open for any criticisms and I look forward to improve
              </p>
            </>
          )}
        </div>
      )
    })
    return conclusionIntro
  }

  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <Title title={title} />
          <article className="blog-content">
            <div>{Introduction()}</div>
            <div>{bodies()}</div>
            <div>{conclusions()}</div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      body {
        description
        id
        title
        titleImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
export default ComponentName
