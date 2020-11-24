import React from "react"
import { StaticQuery, graphql } from "gatsby"

// NOTE: NO LONGER RECOMMENDED, INCLUDED IN COURSE FOR LEGACY / COVERAGE PURPOSES

function ComponentName() {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            info: siteMetadata {
              title
              description
              author
              data
              person {
                name
                age
              }
            }
          }
        }
      `}
      render={data => <h4>{data.site.info.description}</h4>}
    ></StaticQuery>
  )
}

export default ComponentName
