const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Create the index page.
  createPage({
    path: '/',
    component: path.resolve('./src/templates/index.js'),
  });

  const posts = (await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id,
          frontmatter {
            path
          }
        }
      }
    }
  `)).data.allMarkdownRemark.nodes.map(n => ({
    path: n.frontmatter.path,
    id: n.id,
  }));

  posts.forEach(p => {
    createPage({
      path: p.path,
      component: path.resolve('./src/templates/post.js'),
      context: {
        postId: p.id
      },
    });
  });
};