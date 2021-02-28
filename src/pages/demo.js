import Head from '../components/head.js';
import ThumbNail from '../components/ThumbNail.js';
import Layout from '../components/layout/layout';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Demo() {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        demoHost
                    }
                }
            }
            `
    );
    return (
        <Layout>
            <Head/>
            <h1>Demo</h1>
            <ul>
                <ThumbNail
                    url={data.site.siteMetadata.demoHost + '/pannernode-demo'}
                    name="PannerNodeを使って立体的な音声を体感する"/>
                <ThumbNail
                    url={data.site.siteMetadata.demoHost + '/vrm-threejs-test'}
                    name="three-vrmを利用しVRMモデルをアニメーションさせてみる"/>
                <ThumbNail
                    url={data.site.siteMetadata.demoHost + '/vrm-unity-webgl-build-test'}
                    name="Unity WebGLビルドを利用しVRMモデルをアニメーションさせてみる"/>
            </ul>
        </Layout>
    );
}
