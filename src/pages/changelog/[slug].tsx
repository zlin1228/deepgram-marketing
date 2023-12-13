import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import {
  AllRedirectsQuery,
  ChangelogAllSlugsQuery,
  ChangelogDetailDataQuery,
  GlobalCompanyHeaderFooterQuery,
} from 'lib/sdk';

import Section from 'molecules/Section/Section';

import Changelog from 'components/Changelog/Changelog';
import ChangelogHero from 'components/Changelog/ChangelogHero';
import ConversionPanel from 'components/ConversionPanel/ConversionPanel';

import { defaultSectionProps } from 'utils/defaultProps';

import type {
  IComponentConversionPanelRecord,
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  ISeoField,
  ITemplateChangelogRecord,
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
    data: { allTemplateChangelogs },
  } = await apolloClient.query({ query: ChangelogAllSlugsQuery });

  const allDetailPage: ITemplateChangelogRecord[] = allTemplateChangelogs || [];

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
      slug: `https://deepgram.com/changelog/${requestedSlug}`,
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
    data: { templateChangelog, componentConversionPanel },
  } = await apolloClient.query({ query: ChangelogDetailDataQuery, variables: { slug: requestedSlug } });

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  return {
    props: {
      pageProps: templateChangelog,
      conversionPanel: componentConversionPanel,
      slug: requestedSlug,
      staticFooter: componentFooter,
      header: componentHeader as IComponentHeaderRecord,
      company: entityCompany,
    },
    notFound: !templateChangelog,
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
  const seoData = {
    title: pageProps.title,
    description: pageProps?.metaTags?.description,
    image: pageProps?.metaTags?.image,
  } as ISeoField;
  const breadcrumbs = pageProps?.slug?.split('/').map((item: string) => item.replace(/-/g, ' '));

  return (
    <Layout
      slug={`changelog/${slug || ''}`}
      seoMetadata={seoData}
      footer={staticFooter}
      header={header}
      breadcrumbs={['Change Log', ...breadcrumbs]}
    >
      <ChangelogHero {...pageProps} />
      <Changelog {...pageProps} />
      <Section
        id="changelog-conversion-panel-section"
        backgroundColor="Rainbow Gradient"
        {...(defaultSectionProps as any)}
      >
        <ConversionPanel {...conversionPanel} company={company} />
      </Section>
    </Layout>
  );
};

export default TemplatePage;
