import React from 'react';
import Layout from '../components/layout/layout';
import Head from '../components/head.js';
import { useStaticQuery, graphql } from 'gatsby';

export default function Home() {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        description
                    }
                }
            }
            `
    );
    return (
        <Layout>
            <Head/>
            <h1>ツールやデモのサイト</h1>
            <p>{data.site.siteMetadata.description}</p>
        </Layout>
    );
}
