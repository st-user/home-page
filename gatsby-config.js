/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'プログラミングヴンチョウ',
        description: 'アプリケーション(ツール)、デモを公開するサイトです。',
        toolHost: 'https://www.ajizablg.com/',
        demoHost: 'https://www.ajizablg.com/',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: [
                    ''
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-google-adsense',
            options: {
                publisherId: ''
            },
        },
    ]
};
