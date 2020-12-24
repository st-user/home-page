import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Head = props => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title,
                        description
                    }
                }
            }
            `
    );
    const title = props.title || data.site.siteMetadata.title;
    const description = props.description || data.site.siteMetadata.description;
    return (
        <div>
            <Helmet>
                <meta charset="utf-8"/>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Helmet>
        </div>
    );
};

Head.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

export default Head;
