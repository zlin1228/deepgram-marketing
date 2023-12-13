/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://deepgram.com/',
  generateIndexSitemap: true,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    const noIndexRegex = /<meta.*noindex/gim;
    const basePath = '.next/server/pages';
    const filePath = `${basePath + path}.html`;

    if (fs.existsSync(filePath)) {
      try {
        const data = await fs.promises.readFile(filePath, 'utf8');

        if (data.match(noIndexRegex)) {
          // eslint-disable-next-line no-console
          console.log('Ignored file in sitemap:', filePath);

          return null;
        }
      } catch (error) {
        console.error('err', error);
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: [''],
      },
    ],
    additionalSitemaps: ['https://deepgram.com/server-sitemap.xml'],
    transformRobotsTxt: async (_, robotsTxt) => `# Algolia-Crawler-Verif: 60B29CC9DE5B1A09\n\n${robotsTxt}`,
  },
};
