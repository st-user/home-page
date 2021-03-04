const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {             
        const slug = createFilePath({ node, getNode, basePath: 'content' });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};

const templateNameMapping = {
    'index': 'index'
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.fields.slug;
        let templateKey = slug.replace(/\//g, '');
        templateKey = !templateKey ? 'index' : templateKey;
        const templateName = templateNameMapping[templateKey] || 'template';
        createPage({
            path: slug,
            component: path.resolve(`./src/templates/${templateName}.js`),
            context: {
                slug
            }
        });
    });
};
