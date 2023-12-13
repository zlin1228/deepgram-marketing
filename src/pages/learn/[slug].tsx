import { render } from 'datocms-structured-text-to-plain-text';

import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import {
  AllRedirectsQuery,
  AllResourceListQuery,
  BlogAllSlugsQuery,
  BlogCategoryMetaQuery,
  BlogDetailDataQuery,
  CategoryBlogListingQuery,
  GlobalCompanyHeaderFooterQuery,
} from 'lib/sdk';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import Section from 'molecules/Section/Section';

import Blog from 'components/Blog/Blog';
import BlogHero from 'components/Blog/BlogHero';
import BlogCardDeck from 'components/CardDeck/BlogCardDeck';
import ConversionPanel from 'components/ConversionPanel/ConversionPanel';
import ResourceHero from 'components/Resource/ResourceHero';
import TopicListing from 'components/Resource/TopicListing';

import { defaultSectionProps } from 'utils/defaultProps';

import type {
  IComponentConversionPanelRecord,
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  ITemplateBlogRecord,
  ITemplateResourcesExternalRecord,
} from 'lib/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface WebsitePageProps {
  pageProps: any;
  slug?: string;
  staticFooter: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  conversionPanel: IComponentConversionPanelRecord;
  company: IEntityCompanyRecord;
  related: ITemplateBlogRecord[];
  blogs: ITemplateBlogRecord[];
  resources: ITemplateResourcesExternalRecord[];
  isCategoryPage?: boolean;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { blogs1, blogs2, blogs3, blogs4, blogs5 },
  } = await apolloClient.query({ query: BlogAllSlugsQuery });

  const allPages = [...blogs1, ...blogs2, ...blogs3, ...blogs4, ...blogs5] || [];

  const paths = allPages.flatMap(page => {
    const slug = page?.slug;

    return {
      params: {
        slug: slug || '',
        id: page?.id || '',
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const requestedSlug = (params?.slug as string) || '';

  const {
    data: { redirects },
  } = await apolloClient.query({
    query: AllRedirectsQuery,
    variables: {
      slug: `https://deepgram.com/learn/${requestedSlug}`,
    },
  });

  if (redirects) {
    return {
      redirect: {
        destination: redirects?.newSlug || '',
        permanent: true,
      },
    };
  }

  const {
    data: { templateBlog, componentConversionPanel, related },
  } = await apolloClient.query({
    query: BlogDetailDataQuery,
    variables: { slug: requestedSlug },
  });

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  // If templateBlog render Blog Detail
  if (templateBlog) {
    return {
      props: {
        pageProps: templateBlog,
        conversionPanel: componentConversionPanel,
        related,
        slug: requestedSlug,
        staticFooter: componentFooter,
        header: componentHeader as IComponentHeaderRecord,
        company: entityCompany,
        blogs: [],
        resources: [],
      },
      notFound: templateBlog.hideFromListing || !templateBlog, // 404 if hideFromListing or no blog data
    };
  }

  // Else render Blog Category page or 404
  let currentTopicBlogs: ITemplateBlogRecord[] = [];
  let currentTopicResources: ITemplateResourcesExternalRecord[] = [];

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

  const currentBlogCategory = blogCategory.filter(
    cat =>
      requestedSlug ===
      cat
        ?.toLowerCase()
        .replace(/x[\d]+;/g, '')
        .replace(/[^a-z0-9\s]+/g, '')
        .replace(/\s/g, '-'),
  );

  let categoryMetaData: any = [];

  if (currentBlogCategory.length > 0) {
    const {
      data: { blogList1, blogList2 },
    } = await apolloClient.query({
      query: CategoryBlogListingQuery,
      variables: { category: currentBlogCategory[0] },
    });
    const {
      data: { categoryMeta },
    } = await apolloClient.query({
      query: BlogCategoryMetaQuery,
      variables: { name: currentBlogCategory[0] },
    });
    currentTopicBlogs = [...blogList1, ...blogList2] as ITemplateBlogRecord[];
    categoryMetaData = categoryMeta;
  } else {
    const {
      data: { allTemplateResourcesExternals },
    } = await apolloClient.query({ query: AllResourceListQuery });

    currentTopicResources = (allTemplateResourcesExternals as ITemplateResourcesExternalRecord[]).filter(resource => {
      const slug = resource?.resourceType
        ?.toLowerCase()
        .replace(/x[\d]+;/g, '')
        .replace(/[^a-z0-9\s]+/g, '')
        .replace(/\s/g, '-');

      return slug === requestedSlug;
    }) as ITemplateResourcesExternalRecord[];
  }

  return {
    props: {
      pageProps: {
        title: categoryMetaData?.[0]?.title || 'Learn ⚡️ Deepgram',
        description: categoryMetaData?.[0]
          ? render(categoryMetaData[0].description)
          : `All posts in the ${currentBlogCategory[0] || ''} category - Deepgram`,
        image: categoryMetaData?.[0]?.image || null,
      },
      conversionPanel: componentConversionPanel,
      slug: requestedSlug,
      staticFooter: componentFooter,
      header: componentHeader as IComponentHeaderRecord,
      company: entityCompany,
      blogs: currentTopicBlogs,
      resources: currentTopicResources,
      isCategoryPage: true,
    },
    notFound: currentTopicBlogs.length === 0 && currentTopicResources.length === 0,
    revalidate: 300,
  };
};

const TemplatePage: NextPage<WebsitePageProps> = ({
  pageProps = {},
  slug,
  staticFooter,
  header,
  conversionPanel,
  company,
  related,
  blogs,
  resources,
  isCategoryPage,
}) => {
  const {
    _publishedAt: datePublished,
    _updatedAt: dateModified,
    author,
    body,
    title,
    description,
    category,
    image,
  } = pageProps;

  const seo = pageProps.seo || {};

  const seoMetadata = {
    title: seo.title || title,
    description: isCategoryPage
      ? description
      : `${(seo.description || render(body))?.substring(0, 157)}...` ||
        'Explore resources and tools created to inspire creativity, perform deep learning, and equip your company with speech recognition best practices.',
    datePublished: pageProps?.publishDate ? pageProps?.publishDate + 'T12:00:00-07:00' : datePublished,
    dateModified,
    author,
    image: isCategoryPage ? image : seo?.image || pageProps?.featuredImage,
  };

  const heroTitle = blogs?.[0]?.category || resources?.[0]?.resourceType?.replace(/-/g, ' ')?.replace(/_/g, ' ') || '';
  const breadcrumbs = pageProps?.slug?.split('/').map((item: string) => item.replace(/-/g, ' ')) || [slug];

  const relatedBlogs = related?.reduce(
    (acc, blog) => ({
      ...acc,
      [blog.category === category ? 'sameCat' : 'diffCat']: [
        ...acc[blog.category === category ? 'sameCat' : 'diffCat'],
        blog,
      ],
    }),
    { sameCat: [], diffCat: [] },
  );

  const layoutProps = {
    slug: `learn/${slug || ''}`,
    seoMetadata,
    footer: staticFooter,
    header,
    breadcrumbs: ['Learn', ...breadcrumbs],
    isArticle: true,
  };

  if (isCategoryPage) {
    return (
      <Layout pageId={pageProps?.id} {...layoutProps}>
        <ResourceHero title={heroTitle} />
        <TopicListing blogs={blogs} resources={resources} category={blogs?.[0]?.category || (slug as string)} />
        <Section
          id={pageProps?.id}
          layoutId="blog-conversion-panel-section"
          backgroundColor="Rainbow Gradient"
          {...defaultSectionProps}
        >
          <ConversionPanel {...conversionPanel} company={company} />
        </Section>
      </Layout>
    );
  }

  return (
    <Layout pageId={pageProps?.id} {...layoutProps}>
      <BlogHero {...pageProps} />
      <Blog {...pageProps} />
      <Section layoutId="related-blog-card-deck-section" backgroundColor="Black" {...defaultSectionProps}>
        <Flex
          justifyContent="space-between"
          alignItems="flex-end"
          paddingBottom={16}
          borderBottom="2px solid"
          borderColor="gray-700"
          textColor="common-white"
          marginBottom={40}
        >
          <Heading
            as="h2"
            textStyle="sm"
            sm={{ textStyle: 'md' }}
            lg={{ textStyle: 'lg' }}
            textColor="common-white"
            fontWeight="bold"
          >
            Related Articles
          </Heading>
        </Flex>
        {related && <BlogCardDeck card={[...relatedBlogs.sameCat, ...relatedBlogs.diffCat].slice(0, 4)} />}
      </Section>
      <Section layoutId="blog-conversion-panel-section" backgroundColor="Rainbow Gradient" {...defaultSectionProps}>
        <ConversionPanel {...conversionPanel} company={company} />
      </Section>
    </Layout>
  );
};

export default TemplatePage;
