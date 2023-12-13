import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import {
  AllRedirectsQuery,
  AllTemplateBuiltWithDeepgramSlugQuery,
  BuiltWithDeepgramDetailDataQuery,
  GlobalCompanyHeaderFooterQuery,
} from 'lib/sdk';

import Section from 'molecules/Section/Section';

import BuiltWithDeepgramDetail from 'components/BuiltWithDeepgram/BuiltWithDeepgramDetail';
import BuiltWithDeepgramDetailHero from 'components/BuiltWithDeepgram/BuiltWithDeepgramDetailHero';
import ConversionPanel from 'components/ConversionPanel/ConversionPanel';

import { defaultSectionProps } from 'utils/defaultProps';

import type {
  IComponentConversionPanelRecord,
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  ITemplateBuiltWithDeepgramRecord,
} from 'lib/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface WebsitePageProps {
  pageProps: any;
  slug?: string;
  staticFooter: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  conversionPanel: IComponentConversionPanelRecord;
  company: IEntityCompanyRecord;
}

interface StaticPageProps {
  pageProps: any;
  slug?: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { allTemplateBuiltWithDeepgrams },
  } = await apolloClient.query({ query: AllTemplateBuiltWithDeepgramSlugQuery });

  const allDetailPage: ITemplateBuiltWithDeepgramRecord[] = allTemplateBuiltWithDeepgrams || [];

  const slugs: { id: any; slug: string }[] = [];

  // eslint-disable-next-line array-callback-return
  allDetailPage.flatMap(page => {
    const slug = page?.slug;
    const id = page?.id;
    slug && slugs.push({ id, slug });
  });

  const paths = slugs.flatMap(page => ({
    params: {
      slug: page.slug,
      id: page?.id || '',
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
      slug: `https://deepgram.com/built-with-deepgram/${requestedSlug}`,
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
    data: { templateBuiltWithDeepgram, componentConversionPanel },
  } = await apolloClient.query({
    query: BuiltWithDeepgramDetailDataQuery,
    variables: {
      slug: requestedSlug,
    },
  });

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  return {
    props: {
      pageProps: templateBuiltWithDeepgram,
      conversionPanel: componentConversionPanel,
      slug: requestedSlug,
      staticFooter: componentFooter,
      header: componentHeader as IComponentHeaderRecord,
      company: entityCompany,
    },
    notFound: !templateBuiltWithDeepgram,
    revalidate: 60,
  };
};

const TemplatePage: NextPage<WebsitePageProps> = ({
  pageProps,
  slug,
  staticFooter,
  header,
  conversionPanel,
  company,
}) => {
  const { seo } = pageProps;
  const breadcrumbs = pageProps?.slug?.split('/').map((item: string) => item.replace(/-/g, ' '));

  return (
    <Layout
      slug={`built-with-deepgram/${slug || ''}`}
      seoMetadata={seo}
      footer={staticFooter}
      header={header}
      breadcrumbs={['Built with Deepgram', ...breadcrumbs]}
    >
      <BuiltWithDeepgramDetailHero {...pageProps} />
      <BuiltWithDeepgramDetail {...pageProps} />
      <Section id="blog-conversion-panel-section" backgroundColor="Rainbow Gradient" {...(defaultSectionProps as any)}>
        <ConversionPanel {...conversionPanel} company={company} />
      </Section>
    </Layout>
  );
};

export default TemplatePage;
