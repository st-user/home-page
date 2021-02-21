import Head from '../components/head.js';
import ThumbNail from '../components/ThumbNail.js';
import Layout from '../components/layout/layout';
import React from 'react';

export default function Demo() {
    return (
        <Layout>
            <Head/>
            <h1>Demo</h1>
            <ul>
                <ThumbNail
                    url="https://tools.ajizablg.com/pannernode-demo/"
                    name="PannerNodeを使って立体的な音声を体感する"/>
                <ThumbNail
                    url="https://tools.ajizablg.com/vrm-threejs-test/"
                    name="three-vrmを利用しVRMモデルをアニメーションさせてみる"/>
                <ThumbNail
                    url="https://tools.ajizablg.com/vrm-unity-webgl-build-test/"
                    name="Unity WebGLビルドを利用しVRMモデルをアニメーションさせてみる"/>
            </ul>
        </Layout>
    );
}
