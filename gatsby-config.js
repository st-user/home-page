/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'プログラミングヴンチョウ',
        description: '趣味と実用をかねて作成したアプリケーション(ツール)やデモを公開するサイトです。',
        toolHost: 'http://localhost:8080',
        demoHost: 'http://localhost:8080'
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
                    '<TRACKING-ID-HERE>'
                ]
            }
        }
    ]
};
