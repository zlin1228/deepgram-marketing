import Layout from 'layouts/Layout';
import LayoutSection from 'layouts/LayoutSection';
import { initializeApollo } from 'lib/client';
import {
  AllAuthorQuery,
  AllPartnerListQuery,
  AllRedirectsQuery,
  AllTemplateNewsQuery,
  BlogDetailDataQuery,
  ChangelogDataQuery,
  DefaultPagePathsQuery,
  GlobalCompanyHeaderFooterQuery,
  LegalDetailDataQuery,
  ResourceDataQuery,
  TemplatePageFullDataQuery,
} from 'lib/sdk';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import Section from 'molecules/Section/Section';

import Blog from 'components/Blog/Blog';
import BlogHero from 'components/Blog/BlogHero';
import BlogCardDeck from 'components/CardDeck/BlogCardDeck';
import ConversionPanel from 'components/ConversionPanel/ConversionPanel';
import Legal from 'components/Legal/Legal';
import LegalHero from 'components/Legal/LegalHero';

import { defaultSectionProps } from 'utils/defaultProps';
import generateRssFeed from 'utils/generateRSSFeeds';

import type {
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  IEntityPersonRecord,
  ILayoutSectionRecord,
  ITemplateChangelogRecord,
  ITemplateNewsRecord,
  ITemplatePageRecord,
  ITemplatePartnerRecord,
} from 'lib/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface WebsitePageProps {
  pageProps: any;
  company: IEntityCompanyRecord;
  footer: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  components: ILayoutSectionRecord[];
  authors: IEntityPersonRecord[];
  resourceList: any;
  changelogs: ITemplateChangelogRecord[];
  news: ITemplateNewsRecord[];
  templateType: string;
  conversionPanel?: any;
  related?: any;
  partners: ITemplatePartnerRecord[];
}

const legalPages = ['terms', 'privacy'];

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { allTemplatePages, allTemplateLegals, allHideBlogs },
  } = await apolloClient.query({ query: DefaultPagePathsQuery });

  const allPages = allTemplatePages || [];
  const allLegalPage = allTemplateLegals || [];
  const allNonListingBlogs = allHideBlogs || [];

  const exceptSlugs = ['built-with-deepgram', 'learn/article', 'learn/webinar', 'learn/white-paper'];
  const filteredPages = allPages.filter((page: { slug: string }) => !exceptSlugs.includes(page.slug));

  const paths = [...filteredPages, ...allLegalPage, ...allNonListingBlogs].flatMap(page => {
    const slug = page?.slug;

    return {
      params: {
        slug: !slug || slug === 'homepage' ? [] : slug.split('/'),
        id: page?.id || '',
      },
    };
  });

  await generateRssFeed();

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<WebsitePageProps> = async ({ params }) => {
  const apolloClient = initializeApollo();

  const requestedSlug = (params?.slug as string[])?.join('/') || 'homepage';

  const {
    data: { redirects },
  } = await apolloClient.query({
    query: AllRedirectsQuery,
    variables: {
      slug: `https://deepgram.com/${requestedSlug}`,
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
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  const {
    data: { templatePage },
  } = await apolloClient.query({
    query: TemplatePageFullDataQuery,
    variables: {
      slug: requestedSlug,
    },
  });

  const componentsArray = templatePage?.sections || [];

  let allEntityPeople = {};
  let resourceList = {};
  let changelogs = {};
  let allTemplateNews = {};
  let partners: ITemplatePartnerRecord[] = [];

  if (legalPages.includes(requestedSlug)) {
    const {
      data: { templateLegal, componentConversionPanel },
    } = await apolloClient.query({
      query: LegalDetailDataQuery,
      variables: {
        slug: requestedSlug,
      },
    });

    return {
      props: {
        pageProps: templateLegal as any,
        conversionPanel: componentConversionPanel,
        company: entityCompany as IEntityCompanyRecord,
        footer: componentFooter as IComponentFooterRecord,
        header: componentHeader as IComponentHeaderRecord,
        components: componentsArray as unknown as ILayoutSectionRecord[],
        authors: allEntityPeople as IEntityPersonRecord[],
        blogs: [],
        partners: [],
        resourceList,
        changelogs: changelogs as unknown as ITemplateChangelogRecord[],
        news: allTemplateNews as ITemplateNewsRecord[],
        templateType: 'legal',
      },
      notFound: !templateLegal,
      revalidate: 60,
    };
  }

  if (requestedSlug === 'authors') {
    const {
      data: { allEntityPeople: authors },
    } = await apolloClient.query({ query: AllAuthorQuery });

    allEntityPeople = authors;
  }

  if (requestedSlug === 'learn') {
    const { data } = await apolloClient.query({ query: ResourceDataQuery });
    resourceList = data;
  }

  if (requestedSlug === 'changelog') {
    const response = await apolloClient.query({ query: ChangelogDataQuery });

    changelogs = response.data;
  }

  if (requestedSlug.includes('newsroom')) {
    const {
      data: { allTemplateNews: news },
    } = await apolloClient.query({ query: AllTemplateNewsQuery });

    allTemplateNews = news;
  }

  if (requestedSlug === 'partners') {
    const {
      data: { allTemplatePartners },
    } = await apolloClient.query({ query: AllPartnerListQuery });

    partners = allTemplatePartners as ITemplatePartnerRecord[];
  }

  const {
    data: { templateBlog, componentConversionPanel: componentConversionPanelBlog, related },
  } = await apolloClient.query({
    query: BlogDetailDataQuery,
    variables: {
      slug: requestedSlug,
    },
  });

  if (templateBlog) {
    if (!templateBlog?.hideFromListing) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        pageProps: templateBlog,
        conversionPanel: componentConversionPanelBlog,
        related,
        slug: requestedSlug,
        staticFooter: componentFooter,
        header: componentHeader as IComponentHeaderRecord,
        footer: componentFooter as IComponentFooterRecord,
        company: entityCompany as IEntityCompanyRecord,
        blogs: [],
        resources: [],
        components: [],
        authors: [],
        news: [],
        changelogs: [],
        templateType: 'blog',
        resourceList: [],
        partners: [],
      },
      notFound: !templateBlog,
    };
  }

  return {
    props: {
      pageProps: templatePage as ITemplatePageRecord,
      company: entityCompany as IEntityCompanyRecord,
      footer: componentFooter as IComponentFooterRecord,
      header: componentHeader as IComponentHeaderRecord,
      components: componentsArray as unknown as ILayoutSectionRecord[],
      authors: allEntityPeople as IEntityPersonRecord[],
      resourceList,
      changelogs: changelogs as unknown as ITemplateChangelogRecord[],
      news: allTemplateNews as ITemplateNewsRecord[],
      templateType: 'page',
      partners,
    },
    notFound: !templatePage,
    revalidate: 60,
  };
};

const TemplatePage: NextPage<WebsitePageProps> = ({
  pageProps,
  company,
  footer,
  header,
  components,
  authors,
  resourceList,
  changelogs,
  news,
  templateType,
  conversionPanel,
  related,
  partners,
}) => {
  if (!pageProps?.seo) {
    console.log('missing SEO');
  }

  const breadcrumbs = pageProps?.slug?.split('/').map((item: string) => item.replace(/-/g, ' '));

  const LayoutParams = {
    slug: pageProps?.slug || '',
    seoMetadata: pageProps?.seo as any,
    footer,
    header,
    noHeader: pageProps?.noHeader,
    noFooter: pageProps?.noFooter,
    breadcrumbs,
  };

  const componentData = () =>
    components?.map(
      component =>
        component && (
          <LayoutSection
            key={component?.id}
            company={company}
            authors={authors}
            resourceList={resourceList}
            changelogs={changelogs}
            news={news}
            partners={partners}
            {...component}
          />
        ),
    );

  const relatedBlogsSection = (category: string) => {
    const relatedBlogSameCat = related?.filter((blog: any) => blog.category === category);
    const relatedBlogDiffCat = related?.filter((blog: any) => blog.category !== category);

    return (
      <Section id="related-blog-card-deck-section" backgroundColor="Black" {...(defaultSectionProps as any)}>
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
            Related Blogs
          </Heading>
        </Flex>
        {related && <BlogCardDeck card={[...relatedBlogSameCat, ...relatedBlogDiffCat].slice(0, 4)} />}
      </Section>
    );
  };

  switch (templateType) {
    case 'page':
      return (
        <Layout pageId={pageProps?.id} {...LayoutParams}>
          {components && componentData()}
        </Layout>
      );
    case 'legal':
      return (
        <Layout slug={pageProps?.slug || ''} seoMetadata={pageProps?.seo as any} footer={footer} header={header}>
          <Section
            id="legal-conversion-panel-section"
            backgroundColor="Rainbow Gradient"
            {...(defaultSectionProps as any)}
          >
            <LegalHero {...pageProps} />
          </Section>
          <Legal {...pageProps} />
          <Section
            id="legal-conversion-panel-section"
            backgroundColor="Rainbow Gradient"
            {...(defaultSectionProps as any)}
          >
            <ConversionPanel {...conversionPanel} company={company} />
          </Section>
        </Layout>
      );
    case 'blog': {
      return (
        <Layout
          slug={pageProps?.slug || ''}
          seoMetadata={pageProps?.seo}
          footer={pageProps?.footer}
          header={header}
          breadcrumbs={['Learn', ...breadcrumbs]}
        >
          <BlogHero {...pageProps} hideBreadcrumb />
          <Blog {...pageProps} />
          {relatedBlogsSection(pageProps.category)}
          <Section
            id="blog-conversion-panel-section"
            backgroundColor="Rainbow Gradient"
            {...(defaultSectionProps as any)}
          >
            <ConversionPanel {...conversionPanel} company={company} />
          </Section>
        </Layout>
      );
    }
    default:
      return null;
  }
};
export default TemplatePage;
