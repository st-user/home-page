import Head from '../components/head.js';
import ThumbNail from '../components/ThumbNail.js';
import Layout from '../components/layout/layout';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Tools() {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        toolHost
                    }
                }
            }
            `
    );
    return (
        <Layout>
            <Head/>
            <h1>Tools</h1>
            <ul>
                <ThumbNail
                    url={data.site.siteMetadata.toolHost + '/color-picker'}
                    name="カラーコード作成ツール"/>
                <ThumbNail
                    url={data.site.siteMetadata.toolHost + '/simple-video-capture'}
                    name="簡単動画キャプチャーツール"/>
                <ThumbNail
                    url={data.site.siteMetadata.toolHost + '/image-capture'}
                    name="重ねる画面キャプチャーツール"/>
            </ul>
        </Layout>
    );
}
