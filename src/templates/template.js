import PropTypes from 'prop-types';
import Head from '../components/head.js';
import Layout from '../components/layout/layout';
import React from 'react';
import { graphql } from 'gatsby';

const About = function ({ data }) {
    const post = data.markdownRemark;
    return (
        <Layout>
            <Head/>
            <h1>{post.frontmatter.title}</h1>
            <div>(最終更新:{post.frontmatter.date})</div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    );
};

About.propTypes = {
    data: PropTypes.any
};


export const query = graphql`
  query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
          html
          frontmatter {
              title,
              date
            }
        }
    }
`;

export default About;