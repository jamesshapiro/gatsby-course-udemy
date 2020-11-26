import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: ASC }) {
      edges {
        node {
          company
          date
          desc {
            name
          }
          position
          id
          strapiId
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { edges: jobs },
  } = data

  const [value, setValue] = React.useState(0)
  const {
    node: { company, position, date, desc },
  } = jobs[value]
  console.log(company, position, date, desc)

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.node.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.node.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>

        <Link to="/about" className="btn center-btn">
          more info
        </Link>
      </div>
    </section>
  )
}

export default Jobs
