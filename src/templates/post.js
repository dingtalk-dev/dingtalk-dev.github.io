import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FormattedDate from '../components/formatted-date';

function Post({ data }) {
  const siteTitle = data.site.siteMetadata.title;
  const post = data.markdownRemark;
  const frontmatter = post.frontmatter;

  return (
    <Layout title={frontmatter.title} subtitle={siteTitle}>
      <SEO title={frontmatter.title} keywords={[`developer`, `blog`, `alibaba`, `dingtalk`, `ios`, `mac`]} />
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
      <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#aaa' }}>
        由 {frontmatter.author} 发布于 <FormattedDate dateString={frontmatter.date} />
      </div>
    </Layout>
  );
}

export default Post;

export const pageQuery = graphql`
  query($postId: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $postId }) {
      html,
      frontmatter {
        title,
        date,
        author
      }
    }
  }
`
