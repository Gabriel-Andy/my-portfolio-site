import React from "react"
import GitHubCalendar from "react-github-calendar"
import Title from "./src/components/Title"
function Github({ title }) {
  return (
    <section className="section ">
      <Title title={title} />
      <p className=" section-center github-activity">
        GitHub is a repository hosting service. Think of it as the "cloud" for
        code. <br></br>I decided to learn Github to show off my case to the
        world and my goal was to help the community by building project and
        store it on github.
      </p>
      <p className=" section-center github-activity">
        There are three main reasons why I love Github:<br></br>
        1. GitHub lets you save your code online.<br></br>
        2. GitHub will allow all the developers of a project to see what changes
        the other one has made. <br></br>3. It allows you to discuss issues in
        your code with other developers.<br></br> GitHub is like portfolio for
        programmers.<br></br> Companies loves programmers that invest themselves
        in the community. In fact, learning how to use it can give you a really
        good job. Increasingly companies are asking to see a GitHub account,
        followed by references. GitHub is your new resume, build it wisely.
      </p>
      <p className=" section-center github-activity">
        GitHub is undoubtedly a valuable skill to have as a programmer, not only
        in the workplace, but also personally. It’s the most popular source code
        hosting facility out there, and it’s still growing. Millions of
        developers use GitHub to share code and build businesses. In 2017, the
        GitHub community reached 24 million developers working across 67 million
        repositories. Date collected from https://octoverse.github.com/ I think
        this much data is enough to get started with GitHub.
      </p>
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
