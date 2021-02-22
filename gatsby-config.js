/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'プログラミングヴンチョウ',
        description: '趣味と実用をかねて作成したアプリケーション(ツール)やデモを公開するサイトです。'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    '<TRACKING-ID-HERE>'
                ]
            }
        }
    ]
};
