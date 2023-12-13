import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import { AllCaseStudyListQuery, AllCustomPageMetaQuery, GlobalCompanyHeaderFooterQuery } from 'lib/sdk';

import ResourceHero from 'components/Resource/ResourceHero';
import ResourceListing from 'components/Resource/ResourceListing';

import type { IComponentFooterRecord, IComponentHeaderRecord, ISeoField, ITemplateCaseStudyRecord } from 'lib/types';
import type { GetStaticProps, NextPage } from 'next';

interface WebsitePageProps {
  list: ITemplateCaseStudyRecord[];
  footer: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  seo?: any;
}

export const getStaticProps: GetStaticProps<WebsitePageProps> = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { allTemplateCaseStudies },
  } = await apolloClient.query({ query: AllCaseStudyListQuery });

  const {
    data: { componentFooter, componentHeader },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });
  const {
    data: { pageMetaData },
  } = await apolloClient.query({ query: AllCustomPageMetaQuery });

  return {
    props: {
      list: allTemplateCaseStudies as ITemplateCaseStudyRecord[],
      footer: componentFooter as IComponentFooterRecord,
      header: componentHeader as IComponentHeaderRecord,
      seo: pageMetaData?.metaData?.filter((item: { slug: string }) => item?.slug === 'learn/case-study')?.[0],
    },
    notFound: !allTemplateCaseStudies || allTemplateCaseStudies.length === 0,
    revalidate: 60,
  };
};

const ResourceBlogPage: NextPage<WebsitePageProps> = ({ seo, list, footer, header }) => {
  const seoData = {
    title: 'Deepgram Case Study',
    description:
      'Deepgram Automatic Speech Recognition helps you build voice applications with better, faster, more economical transcription at scale.',
  } as ISeoField;

  return (
    <Layout slug="learn/case-study" seoMetadata={seo || seoData} footer={footer} header={header}>
      <ResourceHero title="Case Studies" />
      <ResourceListing list={list} noFilter active="case-study" />
    </Layout>
  );
};
export default ResourceBlogPage;
