import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import GA from '../components/ga';
import PostItem from '../components/post-item';

const IndexPage = React.memo(({ data }) => {
  const posts = data.allMarkdownRemark.nodes.map(n => (
    {
      title: n.frontmatter.title,
      date: n.frontmatter.date,
      path: n.frontmatter.path,
      author: n.frontmatter.author,
      body: n.excerpt,
    }
  ));

  return (
    <Layout>
      <GA />
      <SEO title="" keywords={[`developer`, `blog`, `alibaba`, `dingtalk`, `ios`, `mac`]} />
      <div>
        {posts.map(p => (
          <PostItem
            key={p.path}
            title={p.title}
            date={p.date}
            path={p.path}
            author={p.author}
            body={p.body} />
        ))}
      </div>
    </Layout>
  );
})

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
      nodes {
        frontmatter {
          title,
          path,
          date,
          author
        }
        excerpt(truncate: true)
      }
    }
  }
`
