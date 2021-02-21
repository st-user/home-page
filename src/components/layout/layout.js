import { Link, graphql, useStaticQuery } from 'gatsby';
import logo from './logo.png';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './layout.module.css';

const ListLink = props => (
    <li className={styles.listlink}>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

ListLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.any
};

const Layout = ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
            `
    );
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h3 className={styles.headerText}>
                    <Link to="/" className={styles.headerLogoLink}>
                        <img src={logo} alt="logo" className={styles.headerLogo}/>{data.site.siteMetadata.title}
                    </Link>
                </h3>
            </header>
            <ul className={styles.nav}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/tools/">Tools</ListLink>
                <ListLink to="/demo/">Demo</ListLink>
                <ListLink to="/about/">About</ListLink>
            </ul>
            <div className={styles.main}></div>
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built with
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any
};

export default Layout;
