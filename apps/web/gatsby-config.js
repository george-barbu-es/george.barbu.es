if (process.env.STAGING) {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  });
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

module.exports = {
  siteMetadata: {
    title: `George Barbu | FULLSTACK DEVELOPER`,
    author: `George Barbu`,
    description: `With over 10 years of expertise in HTML, CSS, and JavaScript, 
    I possess a strong passion for continuous learning. 
    I consistently seek opportunities to enhance business value by collaborating 
    closely with various departments, including Product, Marketing, and BI.`,
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `George Barbu | FULLSTACK DEVELOPER`,
        short_name: `Resume - George Barbu`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: 'src/assets/site-icon.jpg',
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: same-origin',
            `Content-Security-Policy: frame-ancestors 'self' https://george.barbu.es`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-decap-cms`,
      options: {
        enableIdentityWidget: true,
        publicPath: `admin`,
        htmlTitle: `Content Manager`,
        htmlFavicon: `static/assets/logo.png`,
        includeRobots: false,
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://george.barbu.cc',
        sitemap: 'https://george.barbu.cc/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img/`,
      },
    },
  ],
};
