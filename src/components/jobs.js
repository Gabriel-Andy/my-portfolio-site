import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
// import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = ({ jobs }) => {
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log(company, position, date, desc)
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                key={item.strapiId}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <a href="https://fonoandy.netlify.app/projects">
          <article className="job-info">
            <h3>{position}</h3>
            <h4>{company}</h4>
            <p className="job-date">{date}</p>
            {desc.map(item => {
              return (
                <div key={item.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{item.title}</p>
                </div>
              )
            })}
          </article>
        </a>
      </div>
      <Link to="/about" className="btn center-btn postion">
        more info
      </Link>
    </section>
  )
}

export default Jobs
