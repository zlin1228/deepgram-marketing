import { render } from 'datocms-structured-text-to-plain-text';
import dynamic from 'next/dynamic';

import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import {
  AllRedirectsQuery,
  AuthorAllSlugsQuery,
  AuthorDetailDataQuery,
  AuthorRelatedDataQuery,
  GlobalCompanyHeaderFooterQuery,
} from 'lib/sdk';

import Section from 'molecules/Section/Section';

import AuthorHero from 'components/Author/AuthorHero';
import ConversionPanel from 'components/ConversionPanel/ConversionPanel';

import { defaultSectionProps } from 'utils/defaultProps';

import type {
  IComponentConversionPanelRecord,
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  IEntityPersonRecord,
  ISeoField,
  ITemplateBlogRecord,
} from 'lib/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface WebsitePageProps {
  pageProps: any;
  slug?: string;
  blogs?: ITemplateBlogRecord[];
  staticFooter: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  conversionPanel: IComponentConversionPanelRecord;
  company: IEntityCompanyRecord;
}

interface StaticPageProps {
  pageProps: any;
  slug?: string;
  id?: string;
}

const BlogList = dynamic(() => import('components/Author/BlogList'));

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { allEntityPeople },
  } = await apolloClient.query({ query: AuthorAllSlugsQuery });

  const allDetailPage: IEntityPersonRecord[] = allEntityPeople || [];

  const slugs: { slug: string }[] = [];

  // eslint-disable-next-line array-callback-return
  allDetailPage
    .filter(page => !page?.externalLink)
    .forEach(page => {
      const slug = page.slug || page.name?.toLowerCase().replace(/\s/g, '-');
      slug && slugs.push({ slug });
    });

  const paths = slugs.flatMap(page => ({
    params: {
      slug: page.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<StaticPageProps> = async ({ params }) => {
  const apolloClient = initializeApollo();

  const requestedSlug = (params?.slug as string) || '';

  const {
    data: { redirects },
  } = await apolloClient.query({
    query: AllRedirectsQuery,
    variables: {
      slug: `https://deepgram.com/authors/${requestedSlug}`,
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
    data: { entityPerson },
  } = await apolloClient.query({
    query: AuthorDetailDataQuery,
    variables: { slug: requestedSlug },
  });

  const requestedId = entityPerson?.id || '';
  const {
    data: { allTemplateBlogs, componentConversionPanel },
  } = await apolloClient.query({ query: AuthorRelatedDataQuery, variables: { id: requestedId } });

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  const templateBlogItems = allTemplateBlogs;

  return {
    props: {
      pageProps: entityPerson,
      blogs: templateBlogItems,
      conversionPanel: componentConversionPanel,
      slug: requestedSlug,
      staticFooter: componentFooter,
      header: componentHeader as IComponentHeaderRecord,
      company: entityCompany,
    },
    notFound: !entityPerson,
    revalidate: 60,
  };
};

const TemplatePage: NextPage<WebsitePageProps> = ({
  pageProps,
  blogs,
  slug,
  staticFooter,
  header,
  conversionPanel,
  company,
}) => {
  const metaDecription = `Read articles from ${pageProps?.name || 'Deepgram Author'} on Deepgram. ${
    render(pageProps?.bio as any) || ''
  }`;
  const seoData = {
    title: pageProps?.name,
    description: metaDecription.length > 160 ? metaDecription.substring(0, 157) + '...' : metaDecription,
    image: pageProps?.headshot?.url,
    author: pageProps,
  } as ISeoField;

  const breadcrumbs = pageProps?.slug?.split('/').map((item: string) => item.replace(/-/g, ' '));

  return (
    <Layout
      slug={`authors/${slug || ''}`}
      seoMetadata={seoData}
      footer={staticFooter}
      header={header}
      breadcrumbs={['Authors', ...breadcrumbs]}
      isPerson
    >
      <AuthorHero {...pageProps} />
      {blogs && <BlogList author={pageProps.name} blogs={blogs} />}
      <Section id="blog-conversion-panel-section" backgroundColor="Rainbow Gradient" {...(defaultSectionProps as any)}>
        <ConversionPanel {...conversionPanel} company={company} />
      </Section>
    </Layout>
  );
};

export default TemplatePage;
