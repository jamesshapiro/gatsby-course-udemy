import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import Title from './Title'

const query = graphql`
  {
    recents: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          title
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Recent = () => {
  const data = useStaticQuery(query)
  const {
    recents: { nodes: posts },
  } = data
  return (
    <Wrapper>
      <Title title="recent" />
      {posts.map(post => {
        // console.log(post.frontmatter)
        const {
          title,
          slug,
          date,
          image: {
            childImageSharp: { fluid },
          },
        } = post.frontmatter
        console.log(title)
        return (
          <Link to={`/posts/${slug}`} key={post.id} className="post">
            <Image fluid={fluid} className="img" />
            <div>
              <h5>{title}</h5>
              <p>{date}</p>
            </div>
          </Link>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .post {
    display: grid;
    grid-template-columns: 75px 1fr;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .img {
    border-radius: var(--radius);
  }
  h5 {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
    letter-spacing: 0;
    line-height: 1.2;
    color: var(--clr-grey-1);
  }
  p {
    font-size: 0.6rem;
    margin-bottom: 0;
    color: var(--clr-grey-5);
  }
  .post:hover {
    h5 {
      color: var(--clr-primary-5);
    }
  }
`

export default Recent
