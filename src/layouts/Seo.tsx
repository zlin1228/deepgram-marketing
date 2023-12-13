import Head from 'next/head';
import Script from 'next/script';

import type { ISeoField, ITemplateBlogRecord } from 'lib/types';
import type { FC } from 'react';

export const siteMetadata = {
  title: 'Deepgram - Automated Speech Recognition',
  siteName: 'Deepgram',
  description:
    'Deepgram Automatic Speech Recognition helps you build voice applications with better, faster, more economical transcription at scale.',
  domain: 'deepgram.com',
};

interface SeoProps extends ISeoField {
  slug: string;
  noIndex?: boolean;
  noFollow?: boolean;
  pageType?: string;
  breadcrumbs?: string[];
  author?: ITemplateBlogRecord['author'];
  datePublished?: ITemplateBlogRecord['_publishedAt'];
  dateModified?: ITemplateBlogRecord['_updatedAt'];
  isArticle?: boolean;
  isPerson?: boolean;
}

const SEO: FC<SeoProps> = ({
  title,
  description,
  image,
  slug,
  noIndex,
  noFollow,
  pageType,
  breadcrumbs,
  author,
  datePublished,
  dateModified,
  isArticle,
  isPerson,
}) => {
  const baseUrl = `https://${siteMetadata.domain}/`;
  const seoTitle = title ? `${title} | ${siteMetadata.siteName}` : siteMetadata.title;
  const seoDescription = description || siteMetadata.description;
  const seoImage = image?.url || 'https://deepgram.com/images/deepgram.jpg';
  const checkSlug = slug === 'homepage' ? '' : slug;
  const seoUrl = checkSlug ? `${baseUrl}${checkSlug}` : baseUrl;
  const canonicalUrl = baseUrl + checkSlug;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': pageType || 'WebPage',
    headline: seoTitle,
    description: seoDescription,
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://deepgram.com/',
        url: 'https://deepgram.com/',
        name: seoTitle,
        isPartOf: {
          '@id': 'https://deepgram.com/#website',
        },
        about: {
          '@id': 'https://deepgram.com/#organization',
        },
        primaryImageOfPage: {
          '@id': 'https://deepgram.com/#primaryimage',
        },
        image: {
          '@id': 'https://deepgram.com/#primaryimage',
        },
        thumbnailUrl: seoImage,
        description: seoDescription,
        breadcrumb: {
          '@id': 'https://deepgram.com/#breadcrumb',
        },
        inLanguage: 'en-US',
        potentialAction: [
          {
            '@type': 'ReadAction',
            target: ['https://deepgram.com/'],
          },
        ],
      },
      {
        '@type': 'ImageObject',
        inLanguage: 'en-US',
        '@id': 'https://deepgram.com/#primaryimage',
        url: seoImage,
        contentUrl: seoImage,
        width: image?.width || 3380,
        height: image?.height || 1174,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://deepgram.com/#breadcrumb',
        itemListElement: breadcrumbs?.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item || 'Home',
          item: `https://deepgram.com/${breadcrumbs
            .slice(0, index)
            .map((bc: string) => bc.toLowerCase().replace(/\s/g, '-'))
            .join('/')}`,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': 'https://deepgram.com/#website',
        url: 'https://deepgram.com/',
        name: 'Deepgram',
        description: seoDescription,
        publisher: {
          '@id': 'https://deepgram.com/#organization',
        },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://deepgram.com/?s={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        ],
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': 'https://deepgram.com/#organization',
        name: 'Deepgram',
        url: 'https://deepgram.com/',
        logo: {
          '@type': 'ImageObject',
          inLanguage: 'en-US',
          '@id': 'https://deepgram.com/#/schema/logo/image/',
          url: 'https://www.datocms-assets.com/96965/1683539914-logo.svg',
          contentUrl: 'https://www.datocms-assets.com/96965/1683539914-logo.svg',
          width: 446,
          height: 56,
          caption: 'Deepgram',
        },
        image: {
          '@id': 'https://deepgram.com/#/schema/logo/image/',
        },
        sameAs: ['https://www.facebook.com/deepgram/', 'https://twitter.com/deepgramai', 'https://github.com/deepgram'],
      },
    ],
  };

  const structuredPersonData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author?.name,
    jobTitle: author?.role,
    image: author?.headshot?.url,
    url: seoUrl,
    mainEntityOfPage: seoUrl,
  };

  const structuredArticleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: seoTitle,
    description: seoDescription,
    datePublished: new Date(datePublished),
    dateModified: new Date(dateModified),
    mainEntityOfPage: seoUrl,
    url: seoUrl,
    thumbnailUrl: seoImage,
    author: structuredPersonData,
  };

  const getStructuredData = () => {
    if (isArticle) {
      return structuredArticleData;
    }
    if (isPerson) {
      return structuredPersonData;
    }

    return structuredData;
  };

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="application-name" content={seoTitle} />
        <meta name="robots" content={`${noIndex ? 'no' : ''}index, ${noFollow ? 'no' : ''}follow`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:site_name" content={siteMetadata.siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={seoImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoUrl} />
        <meta property="twitter:title" content={seoTitle} />
        <meta property="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={seoImage} />
      </Head>
      <Script id="schema" key="structured-data" type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </Script>
    </>
  );
};

export default SEO;
