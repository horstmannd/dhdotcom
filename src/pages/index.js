import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title} {" "} - {node.frontmatter.date}</h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`