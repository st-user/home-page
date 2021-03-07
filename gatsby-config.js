/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'プログラミングヴンチョウ',
        description: '一介のソフトウェアエンジニアが、主に、個人で作成したアプリケーション(ツール)を公開するサイトです。自身が開発で使いそうなツールを素直に作った感じです。実際、自分で様々な開発時に使用しています。',
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
