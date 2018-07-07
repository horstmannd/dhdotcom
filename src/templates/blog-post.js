import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: pink;
  border-bottom: 2px solid darkred;
  margin: 3rem auto;
  max-width: 600px;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Container>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;