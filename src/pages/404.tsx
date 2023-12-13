import Layout from 'layouts/Layout';
import LayoutSection from 'layouts/LayoutSection';
import { initializeApollo } from 'lib/client';
import { GlobalCompanyHeaderFooterQuery, TemplatePageFullDataQuery } from 'lib/sdk';

import type {
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  ITemplatePageRecord,
} from 'lib/types';
import type { GetStaticProps, NextPage } from 'next';

interface NotFoundPageProps {
  pageProps: ITemplatePageRecord;
  company: IEntityCompanyRecord;
  footer: IComponentFooterRecord;
  header: IComponentHeaderRecord;
}

export const getStaticProps: GetStaticProps<NotFoundPageProps> = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { templatePage },
  } = await apolloClient.query({
    query: TemplatePageFullDataQuery,
    variables: {
      slug: '404-page',
    },
  });

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  return {
    props: {
      pageProps: templatePage as ITemplatePageRecord,
      company: entityCompany as IEntityCompanyRecord,
      footer: componentFooter as IComponentFooterRecord,
      header: componentHeader as IComponentHeaderRecord,
    },
    notFound: !templatePage,
    revalidate: 60,
  };
};

const NotFoundPage: NextPage<NotFoundPageProps> = ({ pageProps: { slug, seo, sections }, company, footer, header }) => {
  if (!seo) {
    throw new Error(`Page at ${slug} is missing SEO`);
  }

  return (
    <Layout slug={slug || ''} seoMetadata={seo} footer={footer} header={header}>
      {sections &&
        sections.map(
          component =>
            component &&
            !!Object.keys(component).length && <LayoutSection {...component} key={component?.id} company={company} />,
        )}
    </Layout>
  );
};

export default NotFoundPage;
