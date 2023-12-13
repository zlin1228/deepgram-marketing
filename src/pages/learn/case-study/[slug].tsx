import Layout from 'layouts/Layout';
import LayoutSection from 'layouts/LayoutSection';
import { initializeApollo } from 'lib/client';
import {
  AllRedirectsQuery,
  AllTemplateCaseStudyQuery,
  GlobalCompanyHeaderFooterQuery,
  TemplateCaseStudyDataQuery,
} from 'lib/sdk';

import CaseStudyCompanyBenefits from 'components/CaseStudy/CaseStudyCompanyBenefits';
import CaseStudyDetail from 'components/CaseStudy/CaseStudyDetail';
import CaseStudyHero from 'components/CaseStudy/CaseStudyHero';

import type {
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  ILayoutSectionRecord,
  ITemplateCaseStudyRecord,
} from 'lib/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface WebsitePageProps {
  pageProps: ITemplateCaseStudyRecord;
  company: IEntityCompanyRecord;
  footer: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  components: ILayoutSectionRecord[];
  relatedCaseStudies: ITemplateCaseStudyRecord[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { allTemplateCaseStudies },
  } = await apolloClient.query({ query: AllTemplateCaseStudyQuery });

  const allPages: ITemplateCaseStudyRecord[] = allTemplateCaseStudies || [];

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

export const getStaticProps: GetStaticProps<WebsitePageProps> = async ({ params }) => {
  const apolloClient = initializeApollo();

  const requestedSlug = params?.slug as string;

  const {
    data: { redirects },
  } = await apolloClient.query({
    query: AllRedirectsQuery,
    variables: { slug: `https://deepgram.com/learn/case-study/${requestedSlug}` },
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
    data: { templateCaseStudy, related },
  } = await apolloClient.query({
    query: TemplateCaseStudyDataQuery,
    variables: { slug: requestedSlug },
  });

  const componentsArray = templateCaseStudy?.sections || [];

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({
    query: GlobalCompanyHeaderFooterQuery,
  });

  return {
    props: {
      pageProps: templateCaseStudy as ITemplateCaseStudyRecord,
      company: entityCompany as IEntityCompanyRecord,
      footer: componentFooter as IComponentFooterRecord,
      header: componentHeader as IComponentHeaderRecord,
      components: componentsArray as unknown as ILayoutSectionRecord[],
      relatedCaseStudies: related as ITemplateCaseStudyRecord[],
    },
    notFound: !templateCaseStudy,
    revalidate: 60,
  };
};

const TemplatePage: NextPage<WebsitePageProps> = ({
  pageProps,
  company,
  footer,
  header,
  components,
  relatedCaseStudies,
}) => {
  const { slug, seo } = pageProps;

  return (
    <Layout slug={`learn/case-study/${slug || ''}`} seoMetadata={seo as any} footer={footer} header={header}>
      <CaseStudyHero {...pageProps} />
      <CaseStudyCompanyBenefits {...(pageProps.company as IEntityCompanyRecord)} />
      <CaseStudyDetail {...pageProps} />
      {components &&
        components.map(
          component =>
            component &&
            !!Object.keys(component).length && (
              <LayoutSection
                {...component}
                key={component?.id}
                company={company}
                relatedCaseStudies={relatedCaseStudies}
              />
            ),
        )}
    </Layout>
  );
};
export default TemplatePage;
