import PropTypes from 'prop-types';
import styles from '../components/tools/tools.module.css';
import React from 'react';

const ThumbNail = props => {
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

ThumbNail.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string
};

export default ThumbNail;