import * as React from "react";
import { graphql } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 48,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};
const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

// markup
const IndexPage = ({ data }) => {
  return (
    <main style={pageStyles}>
      <title>Thiago Villa</title>
      <h1 style={headingStyles}>Thiago Villa</h1>
      <p style={paragraphStyles}>
        Coming soon!{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          Find me on{" "}
          <a style={linkStyle} href="https://linkedin.com/in/thiagovilla89">
            LinkedIn
          </a>
        </li>
        {data.allDatoCmsPost.edges.map(({ node: post }) => (
          <li>
            {post.title} {post.meta.publishedAt}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query Last5Posts {
    allDatoCmsPost(
      sort: { fields: [meta___publishedAt], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          meta {
            publishedAt
          }
          title
        }
      }
    }
  }
`;
