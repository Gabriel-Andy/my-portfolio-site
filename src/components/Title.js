import React from "react"

const Title = ({ title, specificTitle }) => {
  return (
    <div className="section-title">
      <h2 className={specificTitle ? "specificTitle" : null}>
        {title || "default title"}
      </h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
