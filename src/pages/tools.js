import Head from '../components/head.js';
import Layout from '../components/layout/layout';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/tools/tools.module.css';

const Tool = props => {
    const url = props.url;
    const name = props.name;
    const anchor = React.createRef();
    const clickThumbnail = () => {
        anchor.current.click();
    };

    return (
        <li>
            <div className={styles.toolLink}>
                <a ref={anchor} target="_blank" rel="noreferrer noopener" href={url}>{name}</a>
            </div>
            <div className={styles.thumbnailContainer} onClick={clickThumbnail}>
                <div className={styles.thumbnail}>
                    <iframe tabIndex="-1" title={name} src={url} frameBorder="0" scrolling="no"></iframe>
                </div>
            </div>
        </li>
    );
};

Tool.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string
};

export default function Tools() {
    return (
        <Layout>
            <Head/>
            <h1>Tools</h1>
            <ul>
                <Tool
                    url="https://tools.ajizablg.com/employment-data-site/"
                    name="雇用統計ダッシュボード"/>
                <Tool
                    url="https://tools.ajizablg.com/color-picker/"
                    name="カラーコード作成ツール"/>
            </ul>
        </Layout>
    );
}
