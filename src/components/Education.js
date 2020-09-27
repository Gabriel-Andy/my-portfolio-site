import React from "react"
import Title from "../components/Title"
import Image from "gatsby"

import {
  FaGraduationCap,
  FaCheck,
  FaRegPaperPlane,
  FaHome,
} from "react-icons/fa"

const Education = ({ title }) => {
  return (
    <>
      <section className="education-page">
        <div className="section-center">
          <article>
            <Title title={title} />
            <p className="description-education">
              I believe one of the best approaches to become a software
              developer is to go in college study computer science or software
              engineering, however, I also believe that computer science doesn't
              fully prepare students for a real world experience. Yes,
              understanding theories such as Datastructure and Algorithms are
              very crucial for every software developer.but Having a job as
              software developer right after graduating from college is very
              hard and sometimes impossible due to the fact that most companies
              are looking for people who have a real world experience.Meaning,
              people who can hit the ground running on day 1. Most companies
              dont want to train people for months before they can be even
              productif. In order to avoid This type of situation, I decided to
              teach myself full-time using multiples plateforms while taking a
              part time computer science in college.You will find all the
              resources that I used down below.
            </p>
            <div className="graduation-progress">
              <h4>
                <FaRegPaperPlane className="project-icon"> </FaRegPaperPlane>{" "}
                graduation in computer science in progress
                <span className="progres"></span>
                <span className="progres"></span>
                <span className="progres"></span>
                <span className="progres"></span>
                <span className="progres"></span>
                <FaGraduationCap className="project-icon" />
              </h4>
            </div>

            <h4>
              <FaRegPaperPlane className="project-icon" />
              resources I used to teach myself coding at home{" "}
              <FaHome className="project-icon" />
            </h4>
            <ul>
              <li>
                learning React by <span>Alex Bank && Eve Porcello</span>
              </li>
              <li>
                Head first html css javascript php by <span>Oreily</span>
              </li>
              <li>FreeCodeCamp.com </li>
              <li>codingphase.com </li>
              <li>youtube.com </li>
              <li>stackoverflow </li>
              <li>W3school.com </li>
              <li>introduction to CS50 by havard university</li>
            </ul>
            <h4>
              <FaRegPaperPlane className="project-icon" />I graduated with the
              bachelor degree in civil engineering in 2017 with 4.2GPA
              <FaCheck className="project-icon" />
            </h4>
          </article>
        </div>
      </section>
    </>
  )
}

export default Education
