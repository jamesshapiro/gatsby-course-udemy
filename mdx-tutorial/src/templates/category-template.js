import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = () => {
  return <h2>categories template</h2>
}

export const query = graphql`
  query GetCategory($category: String) {
    categories: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          category
          author
          date(formatString: "MMMM Do, YYYY")
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          readTime
          title
        }
      }
    }
  }
`

export default CategoryTemplate
