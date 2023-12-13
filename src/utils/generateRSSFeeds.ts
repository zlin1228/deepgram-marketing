import fs from 'fs';

import RSS from 'rss';

import { initializeApollo } from 'lib/client';
import { PageMetaSeoQuery, RssArticlesByCategoryQuery, RssArticlesQuery, RssChangelogQuery } from 'lib/sdk';

import { stringToKebabCase } from 'utils/functions';

import type { ITemplateBlogRecord, ITemplateChangelogRecord } from 'lib/types';

const feeds = ['blog', 'changelog'];

export default async function generateRssFeed() {
  const apolloClient = initializeApollo();
  const site_url = 'https://deepgram.com';

  const {
    data: { changelogSeo },
  } = await apolloClient.query({
    query: PageMetaSeoQuery,
    variables: {
      slug: 'changelog',
    },
  });
  const changelogSeoData = changelogSeo?.seo;
  const {
    data: { learnSeo },
  } = await apolloClient.query({
    query: PageMetaSeoQuery,
    variables: {
      slug: 'learn',
    },
  });
  const learnSeoData = learnSeo?.seo;

  const feedOptions = [
    {
      title: 'Deepgram Blog',
      description: learnSeoData?.description || '',
      site_url,
      feed_url: `${site_url}/blog.xml`,
      image_url: learnSeoData?.image ? learnSeoData?.image?.url : '',
      pubDate: new Date(),
    },
    {
      title: 'Deepgram Product Changelog',
      description: changelogSeoData?.description || '',
      site_url,
      feed_url: `${site_url}/changelog.xml`,
      image_url: changelogSeoData?.image ? changelogSeoData?.image?.url : '',
      pubDate: new Date(),
    },
  ];
  const {
    data: { allTemplateChangelogs },
  } = await apolloClient.query({ query: RssChangelogQuery });
  const {
    data: { allTemplateBlogs },
  } = await apolloClient.query({ query: RssArticlesQuery });

  feedOptions.forEach((feed, index) => {
    const rssFeed = new RSS(feed);

    if (feeds[index] === 'blog') {
      /**
       * returns /blog.xml
       */
      allTemplateBlogs.forEach((blog: ITemplateBlogRecord) => {
        rssFeed.item({
          guid: blog.id,
          title: blog.title || '',
          description: blog.excerpt || blog.seo?.description || '',
          url: `${site_url}/learn/${blog.slug}`,
          date: blog.publishDate,
          author: blog.author?.name || '',
          categories: blog?.category ? [blog.category] : [],
        });
      });
    }

    if (feeds[index] === 'changelog') {
      /**
       * returns /changelog.xml
       */
      allTemplateChangelogs.slice(0, 5).forEach((log: ITemplateChangelogRecord) => {
        rssFeed.item({
          guid: log.id,
          title: log.title || '',
          description: log.description || log.seo?.description || '',
          url: `${site_url}/changelog/${log.slug}`,
          date: log.publishDate,
          categories: log?.category || [],
        });
      });
    }

    fs.writeFile(`./public/${feeds[index]}.xml`, rssFeed.xml({ indent: true }), err => {
      if (err) {
        throw err;
      }
      console.log('RSS Feed Generated', feeds[index]);
    });
  });

  /**
   * returns /blog-{category}.xml
   */
  const blogCategory = [
    'AI & Engineering',
    'Announcement',
    'Best Practices',
    'DG Insider',
    'Devlife',
    'Identity & Language',
    'Linguistics',
    'Product News',
    'Project Showcase',
    'Speech Trends',
    'Tutorial',
  ];

  blogCategory.forEach(async category => {
    const categorySlug = stringToKebabCase(category.replaceAll('& ', ''));
    const options = {
      title: `Deepgram Blog - ${category}`,
      description: learnSeoData?.description || '',
      site_url,
      feed_url: `${site_url}/changelog-${categorySlug}.xml`,
      image_url: learnSeoData?.image ? learnSeoData?.image?.url : '',
      pubDate: new Date(),
    };

    const blogCategoryFeed = new RSS(options);
    const {
      data: { categoryBlogs },
    } = await apolloClient.query({
      query: RssArticlesByCategoryQuery,
      variables: {
        category,
      },
    });

    categoryBlogs.forEach((blog: ITemplateBlogRecord) => {
      blogCategoryFeed.item({
        guid: blog.id,
        title: blog.title || '',
        description: blog.excerpt || blog.seo?.description || '',
        url: `${site_url}/learn/${blog.slug}`,
        date: blog.publishDate,
        author: blog.author?.name || '',
        categories: blog?.category ? [blog.category] : [],
      });
    });

    fs.writeFile(`./public/blog-${categorySlug}.xml`, blogCategoryFeed.xml({ indent: true }), err => {
      if (err) {
        throw err;
      }
      console.log('Blog RSS Feed Generated', categorySlug);
    });
  });

  /**
   * returns /changelog-{category}.xml
   */
  const changeLogByCategory: any = allTemplateChangelogs.reduce((acc: any, log: ITemplateChangelogRecord) => {
    const currChangeLogCategories = { ...acc };

    log?.category &&
      log.category.forEach((logCategory: string) => {
        if (!(logCategory in currChangeLogCategories)) {
          currChangeLogCategories[logCategory] = [log];
        } else {
          currChangeLogCategories[logCategory].push(log);
        }
      });

    return currChangeLogCategories;
  }, {});

  Object.keys(changeLogByCategory).forEach(category => {
    const categorySlug = stringToKebabCase(category.replaceAll('& ', ''));
    const options = {
      title: `Deepgram Changelog - ${category}`,
      description: changelogSeoData?.description || '',
      site_url,
      feed_url: `${site_url}/changelog-${categorySlug}.xml`,
      image_url: changelogSeoData?.image ? changelogSeoData?.image?.url : '',
      pubDate: new Date(),
    };

    const clCategoryFeed = new RSS(options);

    changeLogByCategory[category].slice(0, 5).forEach((log: ITemplateChangelogRecord) => {
      clCategoryFeed.item({
        guid: log.id,
        title: log.title || '',
        description: log.description || log.seo?.description || '',
        url: `${site_url}/changelog/${log.slug}`,
        date: log.publishDate,
        categories: log?.category || [],
      });
    });

    fs.writeFile(`./public/changelog-${categorySlug}.xml`, clCategoryFeed.xml({ indent: true }), err => {
      if (err) {
        throw err;
      }
      console.log('Changelog RSS Feed Generated', categorySlug);
    });
  });
}
