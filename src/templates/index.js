import PropTypes from 'prop-types';
import Head from '../components/head.js';
import Layout from '../components/layout/layout';
import React from 'react';
import { graphql } from 'gatsby';
import styles from '../components/common/style.module.css';

const Home = function ({ data }) {
    const post = data.markdownRemark;
    return (
        <Layout>
            <Head/>
            <h1>{post.frontmatter.title}</h1>
            <div className={styles.marginBottom}>(最終更新:{post.frontmatter.date})</div>
            <div>{data.site.siteMetadata.description}</div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    );
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
        site {
            siteMetadata {
                description
            }
        }
    }
`;

Home.propTypes = {
    data: PropTypes.any
};

export default Home;