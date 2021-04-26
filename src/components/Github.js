import React from "react"
import GitHubCalendar from "react-github-calendar"
import Title from "../components/Title"
function Github({ title }) {
  return (
    <section className="section ">
      <Title title={title} />
      <div className="section-center github-activity">
        <GitHubCalendar username="Gabriel-Andy" />
      </div>
      <a
        className="btn center-btn"
        href="https://github.com/Gabriel-Andy
        "
      >
        all repositories
      </a>
    </section>
  )
}

export default Github
