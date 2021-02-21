import Head from '../components/head.js';
import ThumbNail from '../components/ThumbNail.js';
import Layout from '../components/layout/layout';
import React from 'react';

export default function Tools() {
    return (
        <Layout>
            <Head/>
            <h1>Tools</h1>
            <ul>
                <ThumbNail
                    url="https://tools.ajizablg.com/color-picker/"
                    name="カラーコード作成ツール"/>
                <ThumbNail
                    url="https://tools.ajizablg.com/simple-video-capture/"
                    name="簡単動画キャプチャーツール"/>
            </ul>
        </Layout>
    );
}
