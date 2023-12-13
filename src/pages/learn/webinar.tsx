import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import {
  AllCustomPageMetaQuery,
  AllWebinarListQuery,
  GlobalCompanyHeaderFooterQuery,
  TemplatePageFullDataQuery,
} from 'lib/sdk';

import ResourceHero from 'components/Resource/ResourceHero';
import ResourceListing from 'components/Resource/ResourceListing';

import type {
  IComponentFooterRecord,
  IComponentHeaderRecord,
  ILayoutSectionRecord,
  ISeoField,
  ITemplateExternalWebinarRecord,
  ITemplatePageRecord,
} from 'lib/types';
import type { GetStaticProps, NextPage } from 'next';

interface WebsitePageProps {
  pageProps: ITemplatePageRecord | null;
  list: ITemplateExternalWebinarRecord[];
  footer: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  components: ILayoutSectionRecord[];
  seo?: any;
}

export const getStaticProps: GetStaticProps<WebsitePageProps> = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { allTemplateExternalWebinars },
  } = await apolloClient.query({ query: AllWebinarListQuery });
  const {
    data: { templatePage },
  } = await apolloClient.query({ query: TemplatePageFullDataQuery, variables: { slug: 'learn/webinar' } });

  const componentsArray = templatePage?.sections || [];

  const {
    data: { componentFooter, componentHeader },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });
  const {
    data: { pageMetaData },
  } = await apolloClient.query({ query: AllCustomPageMetaQuery });

  return {
    props: {
      pageProps: (templatePage as ITemplatePageRecord) || null,
      list: allTemplateExternalWebinars as ITemplateExternalWebinarRecord[],
      footer: componentFooter as IComponentFooterRecord,
      header: componentHeader as IComponentHeaderRecord,
      components: (componentsArray || []) as unknown as ILayoutSectionRecord[],
      seo: pageMetaData?.metaData?.filter((item: { slug: string }) => item?.slug === 'learn/webinar')?.[0],
    },
    notFound: !allTemplateExternalWebinars || allTemplateExternalWebinars.length === 0,
    revalidate: 60,
  };
};

const ResourceWebinarPage: NextPage<WebsitePageProps> = ({ seo, list, footer, header, components }) => {
  const seoData = {
    title: 'Deepgram Webinars',
    description:
      'Deepgram Automatic Speech Recognition helps you build voice applications with better, faster, more economical transcription at scale.',
  } as ISeoField;

  return (
    <Layout slug="learn/webinar" seoMetadata={seo || seoData} footer={footer} header={header}>
      <ResourceHero
        title={
          (components?.[0]?.component?.__typename === 'ComponentHeadingRecord' && components?.[0]?.component.heading) ||
          'Webinar'
        }
        headingType={
          (components?.[0]?.component?.__typename === 'ComponentHeadingRecord' &&
            components?.[0]?.component.headingType) ||
          'h1'
        }
      />
      <ResourceListing list={list} active="webinar" />
    </Layout>
  );
};
export default ResourceWebinarPage;
